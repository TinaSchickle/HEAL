// ============================================================
// HEAL – deine Daten. Nur diese Datei musst du pflegen.
// Alle Einträge unten sind BEISPIELE (beispiel: true) und
// sollen durch deine echten Erkenntnisse ersetzt werden.
// ============================================================
window.HEAL_DATA = {
  updated: "2026-11-19",

  // ---------- SYMPTOME ----------
  // staerke: 1 (kaum) bis 10 (sehr stark) | trend: "besser" | "gleich" | "schlechter"
  symptome: [
    { name: "Erschöpfung nach dem Mittag", bereich: "Energie", staerke: 7, trend: "gleich", seit: "2025-03", ausloeser: "Zucker, kurzer Schlaf", notiz: "Tief zwischen 13 und 15 Uhr.", beispiel: true },
    { name: "Blähbauch", bereich: "Verdauung", staerke: 5, trend: "besser", seit: "2024-11", ausloeser: "Hülsenfrüchte, Stress", notiz: "Nach Ernährungsumstellung seltener.", beispiel: true },
    { name: "Einschlafprobleme", bereich: "Schlaf", staerke: 6, trend: "schlechter", seit: "2025-06", ausloeser: "Bildschirm am Abend", notiz: "Wachliegen 45–90 Minuten.", beispiel: true },
    { name: "Nebel im Kopf", bereich: "Kopf & Nerven", staerke: 4, trend: "besser", seit: "2025-01", ausloeser: "", notiz: "Morgens am stärksten.", beispiel: true }
  ],

  // ---------- SUPPLEMENTE ----------
  // zeit: "Morgens" | "Mittags" | "Abends" | "Nach Bedarf"
  supplemente: [
    { name: "Vitamin D3 + K2", dosis: "2000 IE", zeit: "Morgens", mitEssen: true, zweck: "Vitamin-D-Spiegel anheben", seit: "2026-09", marke: "", notiz: "Spiegel in 3 Monaten neu prüfen.", beispiel: true },
    { name: "Magnesiumglycinat", dosis: "300 mg", zeit: "Abends", mitEssen: false, zweck: "Schlaf, Muskelentspannung", seit: "2026-10", marke: "", notiz: "", beispiel: true },
    { name: "Omega-3", dosis: "1000 mg EPA/DHA", zeit: "Mittags", mitEssen: true, zweck: "Entzündungsneigung", seit: "2026-10", marke: "", notiz: "", beispiel: true }
  ],

  // ---------- PLAN (bereits freigegeben) ----------
  plan: {
    status: "Freigegeben",
    freigegeben: "2026-11-01",
    ziel: "Energie stabilisieren und Schlaf verbessern.",
    beispiel: true,
    phasen: [
      { titel: "Phase 1 · Basis", zeitraum: "Woche 1–4", schritte: [
        { id: "p1a", text: "Feste Schlafenszeit, Bildschirm 60 Min. vorher aus", erledigt: false },
        { id: "p1b", text: "Supplemente nach Einnahmeplan nehmen", erledigt: false },
        { id: "p1c", text: "Symptom-Tagebuch täglich führen", erledigt: false }
      ]},
      { titel: "Phase 2 · Labor & Anpassung", zeitraum: "Woche 5–8", schritte: [
        { id: "p2a", text: "Blutwerte kontrollieren lassen", erledigt: false },
        { id: "p2b", text: "Dosierungen mit Ärztin besprechen", erledigt: false }
      ]},
      { titel: "Phase 3 · Festigen", zeitraum: "ab Woche 9", schritte: [
        { id: "p3a", text: "Was wirkt, bleibt. Was nichts bringt, wird abgesetzt", erledigt: false }
      ]}
    ]
  },

  // ---------- BLUTWERTE ----------
  // referenz: Laborbereich | optimal: recherchierter Zielbereich (min/max)
  // verlauf: Messungen, älteste zuerst | quelle: woher der Optimalwert stammt
  blutwerte: [
    { name: "Vitamin D (25-OH)", einheit: "ng/ml", referenz: { min: 20, max: 100 }, optimal: { min: 40, max: 60 }, quelle: "", beispiel: true,
      verlauf: [ { datum: "2026-03-10", wert: 18 }, { datum: "2026-07-02", wert: 24 }, { datum: "2026-10-28", wert: 33 } ] },
    { name: "Ferritin", einheit: "ng/ml", referenz: { min: 15, max: 150 }, optimal: { min: 70, max: 100 }, quelle: "", beispiel: true,
      verlauf: [ { datum: "2026-03-10", wert: 22 }, { datum: "2026-07-02", wert: 31 }, { datum: "2026-10-28", wert: 48 } ] },
    { name: "TSH", einheit: "mU/l", referenz: { min: 0.4, max: 4.0 }, optimal: { min: 0.5, max: 2.0 }, quelle: "", beispiel: true,
      verlauf: [ { datum: "2026-03-10", wert: 3.1 }, { datum: "2026-10-28", wert: 2.6 } ] },
    { name: "Vitamin B12 (Holo-TC)", einheit: "pmol/l", referenz: { min: 25, max: 165 }, optimal: { min: 70, max: 150 }, quelle: "", beispiel: true,
      verlauf: [ { datum: "2026-03-10", wert: 48 }, { datum: "2026-10-28", wert: 62 } ] }
  ],

  // ---------- RECHERCHE (noch genauer zu prüfen) ----------
  // status: "offen" | "läuft" | "geklärt" | prio: "hoch" | "mittel" | "niedrig"
  recherche: [
    { frage: "Hilft Magnesium beim Einschlafen wirklich?", thema: "Schlaf", status: "offen", prio: "hoch", vermutung: "Schwache bis mittlere Evidenz, Form und Dosis entscheidend.", naechsterSchritt: "Systematische Reviews zu Glycinat vs. Citrat suchen.", quellen: [], beispiel: true },
    { frage: "Zusammenhang zwischen Blähbauch und Histamin?", thema: "Verdauung", status: "läuft", prio: "mittel", vermutung: "Möglich, aber Diagnostik unsicher.", naechsterSchritt: "Leitlinie und Studienlage zu DAO-Mangel lesen.", quellen: [], beispiel: true },
    { frage: "Ideale Einnahmezeit für Vitamin D", thema: "Supplemente", status: "geklärt", prio: "niedrig", vermutung: "Zu einer fetthaltigen Mahlzeit. Uhrzeit zweitrangig.", naechsterSchritt: "", quellen: [], beispiel: true }
  ]
};
