import { TheoryPoint, QuizQuestion } from './types';

export const PRETERITO_THEORY: TheoryPoint[] = [
  {
    title: "⏳ Pretérito Perfecto",
    content: "Իսպաներենում Pretérito Perfecto-ն օգտագործվում է խոսելու համար այն գործողությունների մասին, որոնք տեղի են ունեցել անցյալում, բայց կապված են ներկայի հետ (օրինակ՝ այսօր, այս շաբաթ):",
  },
  {
    title: "🛠️ Կազմությունը",
    content: "Կազմվում է HABER օժանդակ բայի ներկա ժամանակով և հիմնական բայի հարակատար դերբայով (Participio):",
    conjugationTables: [
      {
        title: "Hablar (-AR)",
        rows: [
          { pronoun: "Yo", haber: "he", participio: "hablado" },
          { pronoun: "Tú", haber: "has", participio: "hablado" },
          { pronoun: "Él/Ella", haber: "ha", participio: "hablado" },
          { pronoun: "Nosotros", haber: "hemos", participio: "hablado" },
          { pronoun: "Vosotros", haber: "habéis", participio: "hablado" },
          { pronoun: "Ellos/Ellas", haber: "han", participio: "hablado" }
        ]
      },
      {
        title: "Comer (-ER)",
        rows: [
          { pronoun: "Yo", haber: "he", participio: "comido" },
          { pronoun: "Tú", haber: "has", participio: "comido" },
          { pronoun: "Él/Ella", haber: "ha", participio: "comido" },
          { pronoun: "Nosotros", haber: "hemos", participio: "comido" },
          { pronoun: "Vosotros", haber: "habéis", participio: "comido" },
          { pronoun: "Ellos/Ellas", haber: "han", participio: "comido" }
        ]
      },
      {
        title: "Vivir (-IR)",
        rows: [
          { pronoun: "Yo", haber: "he", participio: "vivido" },
          { pronoun: "Tú", haber: "has", participio: "vivido" },
          { pronoun: "Él/Ella", haber: "ha", participio: "vivido" },
          { pronoun: "Nosotros", haber: "hemos", participio: "vivido" },
          { pronoun: "Vosotros", haber: "habéis", participio: "vivido" },
          { pronoun: "Ellos/Ellas", haber: "han", participio: "vivido" }
        ]
      }
    ]
  },
  {
    title: "📚 Participio (Հարակատար դերբայ)",
    rules: [
      "• -AR վերջավորությամբ բայեր -> -ADO (hablado)",
      "• -ER / -IR վերջավորությամբ բայեր -> -IDO (comido, vivido)",
      "⚠️ Անկանոն բայեր: decir (dicho), hacer (hecho), ver (visto), escribir (escrito), romper (roto), volver (vuelto), abrir (abierto), poner (puesto)"
    ]
  },
  {
    title: "📍 Ժամանակային ցուցիչներ",
    markers: [
      "hoy (այսօր)",
      "esta mañana (այս առավոտ)",
      "esta semana (այս շաբաթ)",
      "este mes / este año (այս ամիս / այս տարի)",
      "últimamente (վերջերս)",
      "ya (արդեն) / todavía no (դեռ ոչ)"
    ]
  }
];

export const PRETERITO_QUIZ: QuizQuestion[] = [
  { id: 1, sentence: "Hoy ___ (yo/comer) paella.", options: ["he comido", "has comido", "ha comido"], correctAnswer: "he comido", translation: "Այսօր պաելյա եմ կերել:" },
  { id: 2, sentence: "¿___ (tú/ver) la tele?", options: ["Has visto", "Has veido", "Ha visto"], correctAnswer: "Has visto", translation: "Հեռուստացույց դիտե՞լ ես:" },
  { id: 3, sentence: "Ellos ___ (hacer) la tarea.", options: ["han hecho", "han hacido", "hemos hecho"], correctAnswer: "han hecho", translation: "Նրանք արել են տնայինը:" },
  { id: 4, sentence: "Nosotros ___ (volver) a casa.", options: ["hemos vuelto", "hemos volveido", "han vuelto"], correctAnswer: "hemos vuelto", translation: "Մենք վերադարձել ենք տուն:" },
  { id: 5, sentence: "Ella ___ (escribir) un libro.", options: ["ha escrito", "ha escribido", "has escrito"], correctAnswer: "ha escrito", translation: "Նա գիրք է գրել:" },
  { id: 6, sentence: "Vosotros ___ (decir) la verdad.", options: ["habéis dicho", "habéis decido", "han dicho"], correctAnswer: "habéis dicho", translation: "Դուք ասել եք ճշմարտությունը:" },
  { id: 7, sentence: "Yo ___ (romper) el vaso.", options: ["he roto", "he rompido", "ha roto"], correctAnswer: "he roto", translation: "Ես կոտրել եմ բաժակը:" },
  { id: 8, sentence: "Usted ___ (abrir) la ventana.", options: ["ha abierto", "ha abrido", "he abierto"], correctAnswer: "ha abierto", translation: "Դուք (հարգալից) բացել եք պատուհանը:" },
  { id: 9, sentence: "Todavía no ___ (nosotros/leer) el diario.", options: ["hemos leído", "han leído", "hemos leido"], correctAnswer: "hemos leído", translation: "Մենք դեռ չենք կարդացել լրագիրը:" },
  { id: 10, sentence: "¿Ya ___ (vosotros/poner) la mesa?", options: ["habéis puesto", "habéis ponido", "han puesto"], correctAnswer: "habéis puesto", translation: "Արդեն սեղանը գցե՞լ եք:" }
];
