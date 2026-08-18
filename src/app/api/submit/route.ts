import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

interface FormData {
  entityType?: string;
  cin?: string;
  incDate?: string;
  fullTimeFounder?: string;
  capTableClean?: string;
  litigation?: string;
  sector?: string;
  founderNames?: string;
  commitments?: string;
  linkedin?: string;
  builtBefore?: string;
  howMet?: string;
  headcount?: string;
  problem?: string;
  whoHasIt?: string;
  currentSolution?: string;
  whyNow?: string;
  productLink?: string;
  mau?: string;
  retention?: string;
  revenue?: string;
  growthRate?: string;
  bestNumber?: string;
  revenueModel?: string;
  cac?: string;
  grossMargin?: string;
  dpiit?: string;
  capTableLink?: string;
  raisingAmount?: string;
  valuation?: string;
  useOfFunds?: string;
  consent?: boolean;
}

export async function POST(request: Request) {
  try {
    const data: FormData = await request.json();

    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      console.warn('Notion credentials not configured. Simulating success.');
      return NextResponse.json({ success: true, simulated: true });
    }

    // Properties that match existing Notion DB columns exactly
    const properties: Record<string, unknown> = {
      // Title column (unnamed in the DB)
      '': {
        title: [{ text: { content: data.founderNames || 'Unnamed Application' } }],
      },
      'Entity Type': {
        select: { name: data.entityType || 'Private Limited Company' },
      },
      'CIN': {
        rich_text: [{ text: { content: data.cin || '' } }],
      },
      'Founder Names': {
        rich_text: [{ text: { content: data.founderNames || '' } }],
      },
      'Headcount': {
        rich_text: [{ text: { content: data.headcount || '' } }],
      },
      'Problem': {
        rich_text: [{ text: { content: data.problem || '' } }],
      },
      'Product Link': {
        url: data.productLink || null,
      },
      'Revenue': {
        rich_text: [{ text: { content: data.revenue || '' } }],
      },
      'Cap Table Link': {
        url: data.capTableLink || null,
      },
      'Raising Amount': {
        rich_text: [{ text: { content: data.raisingAmount || '' } }],
      },
      'Status': {
        select: { name: 'New' },
      },
    };

    // All remaining form fields go into the page body as structured content blocks
    const children: unknown[] = [];

    const sections: { heading: string; fields: { label: string; value: string }[] }[] = [
      {
        heading: 'Eligibility Details',
        fields: [
          { label: 'Incorporation Date', value: data.incDate || '' },
          { label: 'Full-Time Founder', value: data.fullTimeFounder || '' },
          { label: 'Cap Table Clean', value: data.capTableClean || '' },
          { label: 'Litigation', value: data.litigation || '' },
        ],
      },
      {
        heading: 'Founders & Team',
        fields: [
          { label: 'Sector', value: data.sector || '' },
          { label: 'Commitments', value: data.commitments || '' },
          { label: 'LinkedIn', value: data.linkedin || '' },
          { label: 'Built Before', value: data.builtBefore || '' },
          { label: 'How Met', value: data.howMet || '' },
        ],
      },
      {
        heading: 'Problem & Market',
        fields: [
          { label: 'Who Has This Problem', value: data.whoHasIt || '' },
          { label: 'Current Solution', value: data.currentSolution || '' },
          { label: 'Why Now', value: data.whyNow || '' },
        ],
      },
      {
        heading: 'Product & Traction',
        fields: [
          { label: 'MAU', value: data.mau || '' },
          { label: 'Retention', value: data.retention || '' },
          { label: 'Growth Rate', value: data.growthRate || '' },
          { label: 'Best Number', value: data.bestNumber || '' },
        ],
      },
      {
        heading: 'Business Model & Readiness',
        fields: [
          { label: 'Revenue Model', value: data.revenueModel || '' },
          { label: 'CAC', value: data.cac || '' },
          { label: 'Gross Margin', value: data.grossMargin || '' },
          { label: 'DPIIT Registration', value: data.dpiit || '' },
          { label: 'Valuation', value: data.valuation || '' },
          { label: 'Use of Funds', value: data.useOfFunds || '' },
        ],
      },
    ];

    for (const section of sections) {
      // Section heading
      children.push({
        object: 'block',
        type: 'heading_2',
        heading_2: {
          rich_text: [{ type: 'text', text: { content: section.heading } }],
        },
      });

      // Each field as a paragraph: "Label: Value"
      for (const field of section.fields) {
        if (field.value) {
          children.push({
            object: 'block',
            type: 'paragraph',
            paragraph: {
              rich_text: [
                {
                  type: 'text',
                  text: { content: `${field.label}: ` },
                  annotations: { bold: true },
                },
                {
                  type: 'text',
                  text: { content: field.value },
                },
              ],
            },
          });
        }
      }

      // Divider between sections
      children.push({ object: 'block', type: 'divider', divider: {} });
    }

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: properties as Parameters<typeof notion.pages.create>[0]['properties'],
      children: children as Parameters<typeof notion.pages.create>[0]['children'],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting to Notion:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
