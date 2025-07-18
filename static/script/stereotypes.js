const headers = document.querySelectorAll(".card-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const card = header.parentElement;
    const icon = header.querySelector(".toggle-icon");
    card.classList.toggle("active");

    if (card.classList.contains("active")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "＋";
    }
  });
});

const stereotypeTranslations = {
  en: {
    heading: "🚫 Stereotypes That Undermine Women's Capabilities in tech",
    stereotypes: [
      {
        title: "Women aren’t logical enough for programming",
        text: "This stereotype falsely assumes women are driven by emotion and lack the analytical thinking required for coding.",
      },
      {
        title: "Women need more help with technical tasks",
        text: "It undermines their autonomy and suggests they can’t solve problems independently or work through complex systems.",
      },
      {
        title: "Women can’t lead engineering teams effectively",
        text: "This belief questions their authority and leadership in highly technical or male-dominated environments.",
      },
      {
        title: "Women struggle with advanced tech topics",
        text: "It implies women aren’t capable of mastering deep technologies like AI, cybersecurity, or machine learning.",
      },
      {
        title: "Female developers write lower quality code",
        text: "This stereotype has no factual basis and diminishes trust in their technical skills and contributions.",
      },
      {
        title: "Women aren't innovative enough to be tech founders",
        text: "It devalues their creativity, vision, and problem-solving abilities in entrepreneurship.",
      },
      {
        title: "They can't keep up with fast-paced tech environments",
        text: "This stereotype portrays women as less resilient or too slow for high-pressure work cultures.",
      },
      {
        title: "Tech is too physically or mentally demanding for women",
        text: "It wrongly assumes women are less capable of handling technical or emotional workloads.",
      },
      {
        title: "Women are better at communication than coding",
        text: "This limits their career growth by placing them in support roles rather than technical ones.",
      },
      {
        title: "They can't make tough technical decisions",
        text: "This stereotype suggests women are indecisive or unfit to lead in high-stakes engineering challenges.",
      },
    ],
  },
  ka: {
    heading: "🚫 სტერეოტიპები, რომლებიც აკნინებს ქალების შესაძლებლობებს ტექნოლოგიებში",
    stereotypes: [
      {
        title: "ქალები არ არიან ლოგიკურები პროგრამირებისთვის",
        text: "ეს სტერეოტიპი არასწორად ამტკიცებს, რომ ქალები ემოციებით მოქმედებენ და მათ არ აქვთ ანალიტიკური აზროვნების უნარი კოდირებისთვის.",
      },
      {
        title: "ქალებს ტექნიკურ დავალებებში მეტი დახმარება სჭირდებათ",
        text: "ეს ამცირებს მათ ავტონომიას და გულისხმობს, რომ ისინი ვერ გადაჭრიან პრობლემებს დამოუკიდებლად ან ვერ გაუმკლავდებიან რთულ სისტემებს.",
      },
      {
        title: "ქალები ვერ უხელმძღვანელებენ საინჟინრო გუნდებს ეფექტურად",
        text: "ეს რწმენა აყენებს ეჭვქვეშ მათ ავტორიტეტს და ლიდერობის უნარს ტექნიკურ ან კაცებით დომინირებულ გარემოში.",
      },
      {
        title: "ქალებს უჭირთ რთული ტექნოლოგიური საკითხების გააზრება",
        text: "იგი გულისხმობს, რომ ქალები ვერ დაეუფლებიან ღრმა ტექნოლოგიებს, როგორიცაა AI, კიბერუსაფრთხოება ან მანქანური სწავლება.",
      },
      {
        title: "ქალი დეველოპერები ნაკლებად ხარისხიან კოდს წერენ",
        text: "ეს სტერეოტიპი ფაქტებს არ ემყარება და აქვეითებს ნდობას მათ ტექნიკურ უნარებში და წვლილში.",
      },
      {
        title: "ქალები არ არიან საკმარისად ინოვაციურები, რომ გახდნენ ტექნოლოგიური დამფუძნებლები",
        text: "ეს ამცირებს მათ კრეატიულობას, ხედვას და პრობლემების გადაჭრის უნარს მეწარმეობაში.",
      },
      {
        title: "ქალები ვერ უძლებენ სწრაფტემპიან ტექნოლოგიურ გარემოს",
        text: "ეს სტერეოტიპი ქალებს აღწერს როგორც ნაკლებად გამძლეს ან ძალიან ნელს სწრაფი და სტრესული სამუშაო კულტურისთვის.",
      },
      {
        title: "ტექნოლოგია ფიზიკურად ან მენტალურად ძალიან მომთხოვნია ქალებისთვის",
        text: "ეს არასწორად გულისხმობს, რომ ქალები ნაკლებად შეუძლიათ ტექნიკური ან ემოციური დატვირთვის გამკლავება.",
      },
      {
        title: "ქალები უკეთესად კომუნიკაციას ახერხებენ, ვიდრე კოდირებას",
        text: "ეს ზღუდავს მათ კარიერულ ზრდას ტექნიკური როლების ნაცვლად მხარდამჭერ პოზიციებზე გადაყვანით.",
      },
      {
        title: "ქალებს არ შეუძლიათ რთული ტექნიკური გადაწყვეტილებების მიღება",
        text: "ეს სტერეოტიპი ამტკიცებს, რომ ქალები არ არიან გადამწყვეტნი ან უვარგისნი ლიდერობისთვის რთულ საინჟინრო საკითხებში.",
      },
    ],
  },
};

function setStereotypesLanguage(lang) {
  const t = stereotypeTranslations[lang];
  if (!t) return;

  // Set main heading
  const heading = document.querySelector(".container > h2");
  if (heading) heading.textContent = t.heading;

  // Update each stereotype card
  const cards = document.querySelectorAll(".stereotypes-card");
  t.stereotypes.forEach((item, i) => {
    if (cards[i]) {
      const header = cards[i].querySelector(".card-header");
      const icon = header.querySelector(".toggle-icon");
      const content = cards[i].querySelector(".card-content");

      if (header && icon && content) {
        // Clear header and rebuild it
        header.innerHTML = "";
        const iconClone = icon.cloneNode(true); // Keep the icon
        header.appendChild(iconClone);
        header.appendChild(document.createTextNode(" " + item.title));

        content.textContent = item.text;
      }
    }
  });
}

// Optional: Call this on load or based on a button
// Example: setStereotypesLanguage('en') or setStereotypesLanguage('ka');
