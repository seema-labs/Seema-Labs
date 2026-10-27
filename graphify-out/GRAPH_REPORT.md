# Graph Report - Seema-Labs  (2026-10-27)

## Corpus Check
- Corpus is ~3,251 words - fits in a single context window. You may not need a graph.

## Summary
- 102 nodes · 142 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 77% EXTRACTED · 20% INFERRED · 4% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Company Identity and Sites
- Human Review and Permissions
- Seema Labs Page Script
- npm Scripts and Package
- Local Preview and Check
- Trinetra Logo Mark
- Permission Plans and Tasks
- Seema Labs Logo Mark
- Task Boundaries for Agents
- Trinetra Mark on Company Site
- Trinetra Page Script

## God Nodes (most connected - your core abstractions)
1. `Trinetra Website` - 9 edges
2. `Seema Labs Website` - 8 edges
3. `Seema Labs` - 7 edges
4. `Trinetra` - 7 edges
5. `Permission Plan` - 7 edges
6. `Trinetra` - 6 edges
7. `Seema Labs` - 6 edges
8. `Trinetra` - 6 edges
9. `Additional Access` - 6 edges
10. `Seema Labs Logo Mark` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Hosted Trinetra Site` --semantically_similar_to--> `Trinetra Website`  [INFERRED] [semantically similar]
  sites/seema-labs/index.html → README.md
- `Seema Labs` --semantically_similar_to--> `Seema Labs`  [INFERRED] [semantically similar]
  README.md → sites/seema-labs/index.html
- `Trinetra` --semantically_similar_to--> `Trinetra`  [INFERRED] [semantically similar]
  README.md → sites/seema-labs/index.html
- `Trinetra` --semantically_similar_to--> `Trinetra`  [INFERRED] [semantically similar]
  README.md → sites/trinetra/index.html
- `Give AI Autonomy, Not Unlimited Authority` --semantically_similar_to--> `Give AI Autonomy, Not Unlimited Authority`  [INFERRED] [semantically similar]
  README.md → sites/seema-labs/index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Seema Labs Three Moments of Clarity** — sites_seema_labs_index_permission_plan, sites_seema_labs_index_human_review, sites_seema_labs_index_additional_access [EXTRACTED 1.00]
- **Trinetra Three Moments of Clarity** — sites_trinetra_index_permission_plan, sites_trinetra_index_human_review, sites_trinetra_index_additional_access [EXTRACTED 1.00]
- **Trinetra How It Works** — sites_trinetra_index_start_with_the_task, sites_trinetra_index_understand_the_access, sites_trinetra_index_make_the_call [EXTRACTED 1.00]
- **Three Corner Strokes of the Trinetra Mark** — sites_trinetra_logo_top_left_corner, sites_trinetra_logo_right_corner, sites_trinetra_logo_bottom_corner [EXTRACTED 1.00]

## Communities (11 total, 1 thin omitted)

### Community 0 - "Company Identity and Sites"
Cohesion: 0.19
Nodes (14): npm run check, Google Fonts, Local Preview, Nepal, Seema Labs, Seema Labs Website, Static Hosting, Trinetra (+6 more)

### Community 1 - "Human Review and Permissions"
Cohesion: 0.23
Nodes (8): Additional Access, Human Review, Login Timeout Permission Example, Policy Controls, Additional Access, Human Review, Login Timeout Permission Example, Make the Call

### Community 2 - "Seema Labs Page Script"
Cohesion: 0.18
Nodes (6): dropdown, mobileToggle, navigation, productMenu, productToggle, tabs

### Community 3 - "npm Scripts and Package"
Cohesion: 0.20
Nodes (9): engines, node, name, private, scripts, check, preview:seema, preview:trinetra (+1 more)

### Community 4 - "Local Preview and Check"
Cohesion: 0.22
Nodes (3): port, root, types

### Community 5 - "Trinetra Logo Mark"
Cohesion: 0.36
Nodes (10): Bottom Corner Stroke, Central Purple Diamond, Three Open Corner Strokes, Trinetra Logo Mark, Purple #7960dc, Right Corner Stroke, Thick Round Stroke, Three Eyes Reading (+2 more)

### Community 6 - "Permission Plans and Tasks"
Cohesion: 0.38
Nodes (5): Permission Plan, Permission Plan, Start with the Task, Task Context to Human Judgment, Understand the Access

### Community 7 - "Seema Labs Logo Mark"
Cohesion: 0.43
Nodes (7): Bracket Monogram Motif, Center Crossbar, Possible Block Letter E, Seema Labs Logo Mark, Split Right Stem, Left Squared Bracket, Burnt Orange Stroke #d55b35

### Community 8 - "Task Boundaries for Agents"
Cohesion: 0.33
Nodes (3): AI Coding Agents, Defined Task Boundary, AI Coding Agents

### Community 9 - "Trinetra Mark on Company Site"
Cohesion: 0.53
Nodes (6): Center Filled Diamond, Trinetra SVG Mark, Three Open Stroke Contours, Three-Eye Motif, 40 by 40 ViewBox, Violet #7960dc

## Ambiguous Edges - Review These
- `Human Review` → `Human Review`  [AMBIGUOUS]
  sites/seema-labs/index.html · relation: shares_data_with
- `Seema Labs Logo Mark` → `Possible Block Letter E`  [AMBIGUOUS]
  sites/seema-labs/logo.svg · relation: semantically_similar_to
- `Trinetra SVG Mark` → `Three-Eye Motif`  [AMBIGUOUS]
  sites/seema-labs/trinetra.svg · relation: conceptually_related_to
- `Three Open Stroke Contours` → `Three-Eye Motif`  [AMBIGUOUS]
  sites/seema-labs/trinetra.svg · relation: conceptually_related_to
- `Trinetra Logo Mark` → `Three Eyes Reading`  [AMBIGUOUS]
  sites/trinetra/logo.svg · relation: conceptually_related_to

## Knowledge Gaps
- **7 isolated node(s):** `Burnt Orange Stroke #d55b35`, `Bracket Monogram Motif`, `Possible Block Letter E`, `40 by 40 ViewBox`, `40 by 40 ViewBox` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 33 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Trinetra` connect `Company Identity and Sites` to `Task Boundaries for Agents`, `Human Review and Permissions`, `Permission Plans and Tasks`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Trinetra Website` (e.g. with `Trinetra` and `Hosted Trinetra Site`) actually correct?**
  _`Trinetra Website` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Burnt Orange Stroke #d55b35`, `Bracket Monogram Motif`, `Possible Block Letter E` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `Permission Plan` connect `Permission Plans and Tasks` to `Task Boundaries for Agents`, `Human Review and Permissions`, `Company Identity and Sites`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Trinetra` (e.g. with `Trinetra` and `Trinetra Website`) actually correct?**
  _`Trinetra` has 2 INFERRED edges - model-reasoned connections that need verification._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Human Review` and `Human Review`?**
  _Edge tagged AMBIGUOUS (relation: shares_data_with) - confidence is low._
- **What is the exact relationship between `Seema Labs Logo Mark` and `Possible Block Letter E`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._