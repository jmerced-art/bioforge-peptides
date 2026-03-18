export interface ProductVariant {
  label: string
  price: number
}

export interface Product {
  slug: string
  name: string
  subname: string
  category: string
  badge: string | null
  capColor: string
  description: string
  specs: string[]
  details: Record<string, string>
  variants: ProductVariant[]
  isLiquid?: boolean
}

export const products: Product[] = [
  // ─── TIER 1: PREMIUM / TOP SELLERS ───────────────────────────────
  {
    slug: "retatrutide",
    name: "Retatrutide",
    subname: "GLP-1 / GIP / Glucagon Triple Agonist",
    category: "peptide",
    badge: "HOT",
    capColor: "#C8A96E",
    description: "The most advanced metabolic research peptide available. A triple incretin receptor agonist targeting GLP-1, GIP, and glucagon receptors simultaneously. Highest potency per mg of any current GLP class compound.",
    specs: ["Lyophilized", "≥99% Purity", "HPLC + MS Verified"],
    details: {
      "Molecular Weight": "4,733.4 g/mol",
      "Mechanism": "GLP-1 / GIP / Glucagon Triple Agonist",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC + Mass Spec",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "10mg", price: 129.99 },
      { label: "20mg", price: 168.00 },
      { label: "30mg", price: 230.00 }
    ]
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    subname: "GLP-1 Receptor Agonist",
    category: "peptide",
    badge: "POPULAR",
    capColor: "#C8A96E",
    description: "Long-acting GLP-1 receptor agonist with an 8-day half-life. The most extensively studied GLP-1 peptide in the research literature. Available in standard research vials.",
    specs: ["Lyophilized", "≥98.5% Purity", "COA Included"],
    details: {
      "Molecular Weight": "4,113.6 g/mol",
      "Half-Life": "~7 days",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "5mg", price: 79.00 },
      { label: "10mg", price: 139.00 }
    ]
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    subname: "Body Protection Compound 15-mer",
    category: "regenerative",
    badge: "POPULAR",
    capColor: "#2D8B7F",
    description: "Body Protective Compound derived from a gastric protein. One of the most researched regenerative peptides with an extensive literature base. Stable lyophilized form with 99%+ purity.",
    specs: ["Lyophilized", "≥99% Purity", "Janoshik Tested"],
    details: {
      "Molecular Weight": "1,419.5 g/mol",
      "CAS Number": "137525-51-0",
      "Storage": "-20°C Lyophilized / Fridge when reconstituted",
      "Reconstitution": "Bacteriostatic Water or Sterile Water",
      "Certificate": "HPLC + Janoshik Lab",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "5mg", price: 34.95 },
      { label: "10mg", price: 59.95 }
    ]
  },
  {
    slug: "tb-500",
    name: "TB-500",
    subname: "Thymosin Beta-4 Fragment",
    category: "regenerative",
    badge: null,
    capColor: "#2D8B7F",
    description: "Synthetic analogue of the naturally occurring thymosin beta-4 protein. Extensively studied in wound healing, tissue repair, and inflammatory response research. Often stacked with BPC-157.",
    specs: ["Lyophilized", "≥98% Purity", "COA Included"],
    details: {
      "Molecular Weight": "4,963.5 g/mol",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "5mg", price: 39.95 },
      { label: "10mg", price: 69.95 }
    ]
  },
  {
    slug: "wolverine-stack",
    name: "Wolverine Stack",
    subname: "BPC-157 & TB-500 Blend",
    category: "stack",
    badge: "NEW",
    capColor: "#1F6B5E",
    description: "The most popular recovery and regeneration stack in research. BPC-157 and TB-500 combined in a single vial at 5mg each. Synergistic dual-pathway research compound. Save vs. buying separately.",
    specs: ["Dual Compound", "5mg BPC + 5mg TB", "Janoshik Tested"],
    details: {
      "BPC-157": "5mg",
      "TB-500": "5mg",
      "Total Peptide Content": "10mg per vial",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC Dual-Compound Verified"
    },
    variants: [
      { label: "5mg / 5mg Blend", price: 49.95 },
      { label: "10mg / 10mg Blend", price: 89.95 }
    ]
  },
  // ─── TIER 2: GH SECRETAGOGUES ─────────────────────────────────────
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    subname: "Selective Growth Hormone Secretagogue",
    category: "gh-secretagogue",
    badge: null,
    capColor: "#B8941A",
    description: "Highly selective GH secretagogue peptide. The most studied standalone GHRP with minimal impact on cortisol and prolactin. Frequently combined with CJC-1295 for synergistic GH pulse amplification.",
    specs: ["Lyophilized", "≥98% Purity", "COA Included"],
    details: {
      "Molecular Weight": "711.85 g/mol",
      "Type": "Selective GHRP",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "2mg", price: 22.95 },
      { label: "5mg", price: 39.95 },
      { label: "10mg", price: 69.95 }
    ]
  },
  {
    slug: "cjc-1295-dac",
    name: "CJC-1295 DAC",
    subname: "GHRH Analogue with Drug Affinity Complex",
    category: "gh-secretagogue",
    badge: "POPULAR",
    capColor: "#B8941A",
    description: "Long-acting GHRH analogue with Drug Affinity Complex extending half-life to 6-8 days. A single weekly injection protocol. Most popular for sustained GH baseline elevation research.",
    specs: ["Lyophilized", "≥98.5% Purity", "COA Included"],
    details: {
      "Molecular Weight": "3,647.3 g/mol",
      "Half-Life": "~6-8 days (with DAC)",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC + MS Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "2mg", price: 29.95 },
      { label: "5mg", price: 59.95 }
    ]
  },
  {
    slug: "cjc-1295-no-dac",
    name: "CJC-1295 No DAC",
    subname: "Modified GRF (1-29) / Sermorelin Analogue",
    category: "gh-secretagogue",
    badge: null,
    capColor: "#B8941A",
    description: "Short-acting GHRH analogue (half-life ~30 min) designed to produce a natural GH pulse pattern. Preferred for protocols that mimic natural pulsatile release. Best combined with Ipamorelin.",
    specs: ["Lyophilized", "≥98% Purity", "COA Included"],
    details: {
      "Molecular Weight": "3,367.0 g/mol",
      "Half-Life": "~30 minutes",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "2mg", price: 22.95 },
      { label: "5mg", price: 44.95 }
    ]
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    subname: "Stabilized GHRH Analogue (TH9507)",
    category: "gh-secretagogue",
    badge: "HOT",
    capColor: "#B8941A",
    description: "Stabilized synthetic analogue of human GHRH. Notable for producing robust IGF-1 elevation in research settings. Two-mg daily protocol is the most widely researched dosing regimen.",
    specs: ["Lyophilized", "≥98% Purity", "COA Included"],
    details: {
      "Molecular Weight": "5,135.9 g/mol",
      "Half-Life": "~26 minutes",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC + MS Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "2mg", price: 34.95 },
      { label: "5mg", price: 74.95 },
      { label: "10mg", price: 129.95 }
    ]
  },
  {
    slug: "ghrp-2",
    name: "GHRP-2",
    subname: "Growth Hormone Releasing Peptide-2",
    category: "gh-secretagogue",
    badge: null,
    capColor: "#B8941A",
    description: "Second-generation GHRP with strong GH pulse stimulation. Well-tolerated in research with consistent GH elevation. Modest cortisol and prolactin impact vs GHRP-6.",
    specs: ["Lyophilized", "≥98% Purity", "COA Included"],
    details: {
      "Molecular Weight": "817.97 g/mol",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "5mg", price: 24.95 },
      { label: "10mg", price: 44.95 }
    ]
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    subname: "GHRH (1-29) NH2",
    category: "gh-secretagogue",
    badge: null,
    capColor: "#B8941A",
    description: "The first 29 amino acids of endogenous GHRH. One of the most well-documented GHRH analogues in the literature. Entry-level GH secretagogue research compound.",
    specs: ["Lyophilized", "≥98% Purity", "COA Included"],
    details: {
      "Molecular Weight": "3,357.9 g/mol",
      "Half-Life": "~10-20 minutes",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "2mg", price: 18.95 },
      { label: "5mg", price: 34.95 },
      { label: "9mg", price: 59.95 }
    ]
  },
  // ─── TIER 3: NOOTROPICS ───────────────────────────────────────────
  {
    slug: "semax",
    name: "Semax",
    subname: "ACTH(4-7)PGP Analogue",
    category: "nootropic",
    badge: null,
    capColor: "#7B5EA7",
    description: "Synthetic heptapeptide derived from ACTH. Extensively studied for neurotrophic and neuroprotective effects. One of the most documented nootropic peptides in the scientific literature.",
    specs: ["Lyophilized", "≥98% Purity", "COA Included"],
    details: {
      "Molecular Weight": "708.85 g/mol",
      "Sequence": "Met-Glu-His-Phe-Pro-Gly-Pro",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC + MS Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "10mg", price: 44.99 },
      { label: "30mg", price: 109.99 }
    ]
  },
  {
    slug: "selank",
    name: "Selank",
    subname: "Tuftsin Analogue Heptapeptide",
    category: "nootropic",
    badge: null,
    capColor: "#7B5EA7",
    description: "Synthetic analogue of the immunomodulatory peptide Tuftsin. Widely studied in anxiolytic and cognitive research contexts. Stabilized heptapeptide with robust neurological research literature.",
    specs: ["Lyophilized", "≥98% Purity", "COA Included"],
    details: {
      "Molecular Weight": "751.9 g/mol",
      "Sequence": "Thr-Lys-Pro-Arg-Pro-Gly-Pro",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "5mg", price: 39.99 },
      { label: "15mg", price: 99.99 }
    ]
  },
  // ─── TIER 4: REGENERATIVE / SKIN ──────────────────────────────────
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    subname: "Copper Peptide Tripeptide-1",
    category: "regenerative",
    badge: "POPULAR",
    capColor: "#2D8B7F",
    description: "Naturally occurring copper complex with potent regenerative and anti-inflammatory research applications. Extensively studied for tissue remodeling, collagen synthesis, and cellular repair pathways.",
    specs: ["Lyophilized", "≥98% Purity", "COA Included"],
    details: {
      "Molecular Weight": "340.4 g/mol",
      "Form": "Lyophilized Powder",
      "Storage": "-20°C / 4°C Short-Term",
      "Reconstitution": "Sterile or Bacteriostatic Water",
      "Certificate": "HPLC Verified",
      "Stability": "24 months lyophilized"
    },
    variants: [
      { label: "50mg", price: 34.99 },
      { label: "100mg", price: 59.99 },
      { label: "200mg", price: 99.99 }
    ]
  },
  {
    slug: "epithalon",
    name: "Epithalon",
    subname: "Epitalon Tetrapeptide",
    category: "regenerative",
    badge: null,
    capColor: "#2D8B7F",
    description: "Synthetic tetrapeptide analogue of the pineal gland peptide epithalamin. Studied extensively for telomerase activation and cellular longevity research. One of the most documented anti-aging peptides.",
    specs: ["Lyophilized", "≥98% Purity", "COA Included"],
    details: {
      "Molecular Weight": "390.35 g/mol",
      "Sequence": "Ala-Glu-Asp-Gly",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "10mg", price: 44.95 },
      { label: "20mg", price: 74.95 }
    ]
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    subname: "Mitochondrial-Derived Peptide",
    category: "regenerative",
    badge: "NEW",
    capColor: "#2D8B7F",
    description: "Mitochondria-derived peptide encoded within the 12S rRNA gene. Studied for metabolic regulation, insulin sensitivity, and exercise response research. Emerging as one of the most compelling longevity peptides.",
    specs: ["Lyophilized", "≥98% Purity", "COA Included"],
    details: {
      "Molecular Weight": "2,174.5 g/mol",
      "Origin": "Mitochondria-Derived",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC + MS Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "5mg", price: 59.95 },
      { label: "10mg", price: 109.95 }
    ]
  },
  {
    slug: "melanotan-2",
    name: "Melanotan II",
    subname: "MT-2 Alpha-MSH Analogue",
    category: "peptide",
    badge: null,
    capColor: "#C8A96E",
    description: "Cyclic lactam analogue of alpha-melanocyte stimulating hormone. Studied for melanogenesis, libido, and appetite regulation research pathways. One of the oldest and most widely researched melanocortin peptides.",
    specs: ["Lyophilized", "≥99% Purity", "COA Included"],
    details: {
      "Molecular Weight": "1,024.2 g/mol",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC Verified",
      "Form": "Lyophilized Powder"
    },
    variants: [
      { label: "10mg", price: 39.95 },
      { label: "3-Pack (30mg)", price: 99.95 }
    ]
  },
  // ─── TIER 5: AMINO / BLENDS ───────────────────────────────────────
  {
    slug: "glow-blend",
    name: "Glow Blend",
    subname: "Premium Amino Peptide Complex",
    category: "amino",
    badge: "POPULAR",
    capColor: "#C8A96E",
    description: "Proprietary amino acid and peptide research blend formulated for advanced cellular research applications. Multi-pathway compound with full COA on every batch. Limited production runs.",
    specs: ["Lyophilized", "≥97% Purity", "Proprietary Blend"],
    details: {
      "Form": "Lyophilized Powder",
      "Blend Type": "Proprietary Amino-Peptide",
      "Storage": "-20°C",
      "Reconstitution": "Bacteriostatic Water",
      "Certificate": "HPLC + Full Panel",
      "Batch Size": "Limited Run"
    },
    variants: [
      { label: "70mg Vial", price: 69.95 },
      { label: "2-Pack (140mg)", price: 124.95 }
    ]
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    subname: "Nicotinamide Adenine Dinucleotide",
    category: "amino",
    badge: "NEW",
    capColor: "#C8A96E",
    description: "Coenzyme foundational to cellular energy metabolism and DNA repair research. Injectable form allows for research on systemic bioavailability. One of the fastest growing research compounds in longevity science.",
    specs: ["Lyophilized", "≥99% Purity", "COA Included"],
    details: {
      "Molecular Weight": "663.43 g/mol",
      "Form": "Lyophilized Powder",
      "Storage": "-20°C Lyophilized",
      "Reconstitution": "Sterile Water",
      "Certificate": "HPLC Verified",
      "Stability": "Stable 24mo lyophilized"
    },
    variants: [
      { label: "500mg", price: 59.95 },
      { label: "1000mg", price: 99.95 }
    ]
  },
  // ─── TIER 6: SUPPLIES ────────────────────────────────────────────
  {
    slug: "bac-water-10ml",
    name: "BAC Water",
    subname: "Bacteriostatic Water — 10mL",
    category: "supplies",
    badge: "ESSENTIAL",
    capColor: "#7aaabb",
    isLiquid: true,
    description: "Sterile 10mL bacteriostatic water solution for peptide reconstitution. 0.9% benzyl alcohol preservative. Required for reconstituting all lyophilized research peptides. Filtered and sterilized.",
    specs: ["Sterile", "0.9% Benzyl Alcohol", "10mL Vial"],
    details: {
      "Volume": "10mL",
      "Preservative": "0.9% Benzyl Alcohol",
      "Sterility": "0.22μm Filtered",
      "Storage": "Room Temp / Refrigerated",
      "Use": "Peptide Reconstitution",
      "Form": "Sterile Liquid"
    },
    variants: [
      { label: "10mL Vial", price: 10.00 },
      { label: "30mL Vial", price: 19.95 },
      { label: "3-Pack (10mL)", price: 24.95 }
    ]
  }
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products
  return products.filter((p) => p.category === category)
}

export const categories = [
  { key: 'all', label: 'All' },
  { key: 'peptide', label: 'Peptides' },
  { key: 'gh-secretagogue', label: 'GH Secretagogues' },
  { key: 'regenerative', label: 'Regenerative' },
  { key: 'nootropic', label: 'Nootropics' },
  { key: 'stack', label: 'Stacks' },
  { key: 'amino', label: 'Amino & Blends' },
  { key: 'supplies', label: 'Supplies' },
]

export const categoryLabels: Record<string, string> = {
  'peptide': 'Peptide',
  'gh-secretagogue': 'GH Secretagogue',
  'regenerative': 'Regenerative',
  'nootropic': 'Nootropic',
  'stack': 'Stack',
  'amino': 'Amino & Blend',
  'supplies': 'Supplies',
}

export const vialMg: Record<string, string> = {
  'retatrutide': '10mg',
  'semaglutide': '5mg',
  'bpc-157': '5mg',
  'tb-500': '5mg',
  'wolverine-stack': '5/5mg',
  'ipamorelin': '5mg',
  'cjc-1295-dac': '2mg',
  'cjc-1295-no-dac': '2mg',
  'tesamorelin': '2mg',
  'ghrp-2': '5mg',
  'sermorelin': '2mg',
  'semax': '10mg',
  'selank': '5mg',
  'ghk-cu': '50mg',
  'epithalon': '10mg',
  'mots-c': '5mg',
  'melanotan-2': '10mg',
  'glow-blend': '70mg',
  'nad-plus': '500mg',
  'bac-water-10ml': '10mL',
}
