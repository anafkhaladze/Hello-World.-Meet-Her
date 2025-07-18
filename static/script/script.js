const translations = {
  en: {
    missionTitle: "Our Mission",
    missionText: `We’re here to amplify the voices of women in tech. Whether you're
        a beginner, a seasoned engineer, or somewhere in between—this
        space is for you. We're building a future where women are seen,
        heard, and leading the way in technology.`,
    storyHeader: "Digital Goddesses",
    resourcesTitle: "Explore Resources",

    ada: {
      heading: "Ada Lovelace (1815–1852)",
      contribution: "Contribution: First Computer Programmer",
      points: [
        "Ada wrote the first algorithm intended for a machine—the Analytical Engine by Charles Babbage.",
        "She imagined computers could go beyond math to create music, art, and more.",
        "Her work laid the foundation for modern programming.",
      ],
      legacy: `🧠 <span>Legacy:</span> The programming language "Ada" was named in her honor.`,
      link: "See more...",
    },
    grace: {
      heading: "Grace Hopper (1906–1992)",
      contribution: "Contribution: Pioneer of Computer Programming Languages",
      points: [
        "Created the first compiler, allowing programmers to use plain English-like language.",
        "Helped develop COBOL, one of the first high-level programming languages.",
        'Coined the term "debugging" after finding a moth inside a computer.',
      ],
      legacy: `🛠 <span>Legacy:</span> Nicknamed “Amazing Grace,” she revolutionized coding.`,
      link: "See more...",
    },
    annie: {
      heading: "Annie Easley (1933–2011)",
      contribution: "Contribution: Rocket Scientist and Computer Programmer",
      points: [
        "Worked at NASA as a mathematician and computer programmer.",
        "Developed code for rocket launch systems, including those used in Centaur rockets.",
        "Advocated for diversity in STEM and helped break racial and gender barriers.",
      ],
      legacy: `🚀 <span>Legacy:</span> A true pioneer for both space exploration and women of color in tech.`,
      link: "See more...",
    },
    katherine: {
      heading: "Katherine Johnson (1918–2020)",
      contribution: "Contribution: Trajectory Calculations for Space Missions",
      points: [
        "She calculated the trajectory for Alan Shepard’s 1961 Freedom 7 mission, which was America’s first human spaceflight.",
        "For the Friendship 7 mission, astronaut John Glenn personally asked NASA to “get the girl” (Katherine) to verify the computer's orbital calculations by hand before he would fly.",
      ],
      legacy: `🚀 <span>Legacy:</span> She made space travel safer and more accurate through precise calculations and her work proved that Black women could not only contribute to science — they could lead it.`,
      link: "See more...",
    },

    hedy: {
      heading: "Hedy Lamarr (1914–2000)",
      contribution: "Contribution: Frequency-Hopping Spread Spectrum",
      points: [
        "During World War II, Hedy co-invented a “frequency-hopping” communication system with composer George Antheil in 1941.",
        "The idea: If radio signals rapidly hop between frequencies, enemies can’t easily jam or intercept them.",
      ],
      legacy: `🚀 <span>Legacy:</span> Mother of Modern Wireless: 📶 Wi-Fi,📱 Bluetooth🛰️, GPS📡, Mobile communications.`,
      link: "See more...",
    },
    margaret: {
      heading: "Margaret Hamilton (1936–)",
      contribution: "Contribution: Lead Software Engineer for Apollo Missions",
      points: [
        "Margaret was the Director of Software Engineering at MIT Instrumentation Lab, which worked with NASA.",
        "She led the team that developed the onboard flight software for the Apollo space program — including Apollo 11, the first mission to land on the Moon in 1969.",
      ],
      legacy: `🚀 <span>Legacy:</span> Inventor of Software Engineering.`,
      link: "See more...",
    },

    sheryl: {
      heading: "Sheryl Kara Sandberg (1969)",
      contribution: "Contribution: COO of Facebook / Meta.",
      points: [
        "Transformed Facebook from a fast-growing startup into a profitable global business.",
        "Developed and scaled the advertising model that made Facebook one of the biggest digital ad platforms.",
        "Built Facebook’s business operations, HR, sales, and marketing, helping the company go public in 2012.",
      ],
      legacy: "🧠 <span>Legacy:</span> Tech Leadership at Facebook (Meta)",
      link: "See more...",
    },
    reshma: {
      heading: "Reshma Saujani (1975)",
      contribution: "Contribution: Founder of Girls Who Code",
      points: [
        "Created the nonprofit Girls Who Code to inspire, educate, and equip young girls with computing skills.",
        "The program has reached over 500,000 girls globally, especially focusing on underrepresented communities.",
        "Helped dramatically increase the number of young women entering computer science and tech careers.",
      ],
      legacy: "🛠 <span>Legacy:</span> Impact on Tech & Education",
      link: "See more...",
    },
    feiFei: {
      heading: "Fei-Fei Li (1976)",
      contribution: "Contribution: Creation of ImageNet",
      points: [
        "Initiated the ImageNet project in 2006, building a massive, labeled image dataset of over 14 million images spanning thousands of object categories.",
        "This dataset and its annual ImageNet Challenge were pivotal in catalyzing the deep learning revolution—most notably influencing breakthroughs like AlexNet in 2012.",
        "Joined Stanford in 2009, directed the Stanford AI Lab (2013–2018), and co‑founded the Human‑Centered AI Institute (HAI) in 2019.",
      ],
      legacy:
        "🚀 <span>Legacy:</span> Pioneering AI and Computer Vision Research",
      link: "See more...",
    },
    Parisa: {
      heading: "Parisa Tabriz (1983)",
      contribution:
        "Contribution: Parisa Tabriz is a prominent Iranian-American computer security expert and technology leader.",
      points: [
        "Google Chrome Leadership: Parisa Tabriz serves as the Vice President and General Manager of Google Chrome, overseeing the development and security of one of the world's most widely used web browsers.",
        "Project Zero: She manages Project Zero, Google's elite team dedicated to identifying and addressing zero-day vulnerabilities, thereby improving the overall security of the internet.",
      ],
      legacy:
        "🚀 <span>Legacy:</span> Affectionately known as Google's 'Security Princess,' she has significantly influenced the cybersecurity landscape through her leadership, advocacy, and innovative approach to security.",
      link: "See more...",
    },
    Kimberly: {
      heading: "Kimberly Bryant (1967)",
      contribution:
        "Contribution: American electrical engineer and the founder of Black Girls CODE.",
      points: [
        "Biotech and Pharma Industry: Held engineering and technical leadership roles at Fortune 100 companies such as Genentech, Merck, and Pfizer for over 20 years.",
        "Founder of Black Girls CODE: Established in 2011 to provide technology education to girls of color, aiming to bridge the digital divide and increase diversity in tech.",
      ],
      legacy:
        "🚀 <span>Legacy:</span> Her work has significantly impacted the representation of Black women in STEM fields.",
      link: "See more",
    },

    Tiera: {
      heading: "Tiera Guinn Fletcher (1995)",
      contribution:
        "Contribution: Tiera Guinn Fletcher is an American aerospace engineer recognized for her significant contributions to NASA's Space Launch System .",
      points: [
        "2017 Good Housekeeping's Awesome Woman Award.",
        "Albert G. Hill Prize at MIT for academic excellence and contributions to campus diversity.",
      ],
      legacy:
        "🚀 <span>Legacy:</span> Born in the greater Atlanta area, Fletcher developed an early interest in aerospace engineering at age 11 through a Lockheed Martin program.",
      link: "See more...",
    },

    resources: [
      {
        title: "Learn to Code",
        text: "Free platforms and tutorials to kickstart your journey.",
        button: "See more...",
      },
      {
        title: "Job Prep & Interviews",

        text: "Tips, mock interviews, and resume templates just for you.",
        button: "See more...",
      },
      {
        title: "Find a Mentor",
        text: "Connect with experienced women in tech who want to help you grow.",
        button: "See more...",
      },
      {
        title: "Mental Health",
        text: "How to manage stress, imposter syndrome, and burnout in tech.",
        button: "See more...",
      },
    ],
  },

  ka: {
    missionTitle: "ჩვენი მისია",
    missionText: `ჩვენ აქ ვართ, რომ ტექნოლოგიაში მომუშავე ქალების ხმები გავაძლიეროთ. თუ ახალბედა ხარ, გამოცდილი ინჟინერი ან უბრალოდ გზის საწყის ეტაპზე — ეს სივრცე შენთვისაა. ჩვენ ვაშენებთ მომავალს, სადაც ქალები ჩანან, ისმიან და ლიდერობენ.`,
    storyHeader: "ციფრული ქალღმერთები",
    resourcesTitle: "შეისწავლე რესურსები",
    ada: {
      heading: "ადა ლავლეისი (1815–1852)",
      contribution: "პირველი პროგრამისტი ისტორიაში",
      points: [
        "ადამ დაწერა პირველი ალგორითმი, რომელიც განკუთვნილი იყო მანქანისთვის — ჩარლზ ბებიჯის ანალიტიკური მანქანისთვის.",
        "მან წარმოიდგინა, რომ კომპიუტერებს შეეძლოთ მათემატიკის მიღმაც წასვლა — მუსიკის, ხელოვნებისა და სხვა სფეროების შექმნა.",
        "მისმა მუშაობამ საფუძველი დაუდო თანამედროვე პროგრამირებას.",
      ],
      legacy: `🧠 <span>მემკვიდრეობა:</span> პროგრამირების ენა "Ada" მისი პატივსაცემად დაერქვა.`,
      link: "იხილეთ მეტი...",
    },
    grace: {
      heading: "გრეის ჰოპერი (1906–1992)",
      contribution: "შესწორი: კომპიუტერული პროგრამირების ენების პიონერი",
      points: [
        "შექმნა პირველი კომპილატორი, რომელმაც პროგრამისტებს საშუალება მისცა გამოიყენონ ინგლისურენოვანი მსგავსი ენა.",
        "მონაწილეობა მიიღო COBOL-ის შექმნაში — ერთ-ერთი პირველი მაღალდონიანი პროგრამირების ენა.",
        'იგი იყო ტერმინის "გამართვა" (debugging) ავტორი მას შემდეგ, რაც კომპიუტერში პეპელა აღმოაჩინა.',
      ],
      legacy: `🛠 <span>მემკვიდრეობა:</span> მეტსახელად „შესანიშნავი გრეისი“, მან კოდირება რადიკალურად შეცვალა.`,
      link: "იხილეთ მეტი...",
    },
    annie: {
      heading: "ენი ისლი (1933–2011)",
      contribution: "შესწორი: რაკეტების მეცნიერი და პროგრამისტი",
      points: [
        "მუშაობდა NASA-ში როგორც მათემატიკოსი და კომპიუტერული პროგრამისტი.",
        "შექმნა კოდი რაკეტის გაშვების სისტემებისთვის, მათ შორის Centaur-ის რაკეტებისთვის.",
        "ეწეოდა STEM-ში მრავალფეროვნების მხარდასაჭერად და ებრძოდა რასობრივ და გენდერულ ბარიერებს.",
      ],
      legacy: `🚀 <span>მემკვიდრეობა:</span> ნამდვილი პიონერი კოსმოსის კვლევაში და ფერადკანიანი ქალებისთვის ტექნოლოგიაში.`,
      link: "იხილეთ მეტი...",
    },
    katherine: {
      heading: "კეთრინ ჯონსონი (1918–2020)",
      contribution: "შესწორი: კოსმოსური მისიის ტრაექტორიის გამოთვლები",
      points: [
        "მან გამოთვალა ტრაექტორია ალან შეფარდის 1961 წლის Freedom 7 მისიაში — ამერიკის პირველ ადამიანურ კოსმოსურ ფრენაში.",
        "Friendship 7-ის მისიისთვის, ასტრონავტმა ჯონ გლენმა პირადად სთხოვა NASA-ს „მოიყვანეთ ის გოგო“ (კეთრინი), რომ ხელით გადაემოწმებინა კომპიუტერის ორბიტული გამოთვლები.",
      ],
      legacy: `🚀 <span>მემკვიდრეობა:</span> მან კოსმოსური მოგზაურობა უფრო უსაფრთხო და ზუსტი გახადა. მისი მუშაობა ამტკიცებს, რომ შავკანიანი ქალები არამხოლოდ მონაწილეები, არამედ მეცნიერების ლიდერებიც შეიძლება იყვნენ.`,
      link: "იხილეთ მეტი...",
    },

    hedy: {
      heading: "ჰედი ლამარი (1914–2000)",
      contribution: "შესწორი: ფრეკვენციის გადახტომაზე დაფუძნებული კავშირი",
      points: [
        "მეორე მსოფლიო ომის დროს, ჰედიმ და კომპოზიტორმა ჯორჯ ანთეილმა 1941 წელს გამოიგონეს 'ფრეკვენციის გადახტომაზე' დაფუძნებული საკომუნიკაციო სისტემა.",
        "იდეა იყო ასეთი: თუ სიგნალი ხშირად ცვლის ფრეკვენციას, მტერს გაუჭირდება მისი ჩახშობა ან გაშიფვრა.",
      ],
      legacy: `🚀 <span>მემკვიდრეობა:</span> თანამედროვე უკაბელო კავშირის დედა — 📶 Wi-Fi, 📱Bluetooth, 🛰️GPS, 📡მობილური კავშირი.`,
      link: "იხილეთ მეტი...",
    },

    margaret: {
      heading: "მარგარეტ ჰამილტონი (1936)",
      contribution: "შესწორი: აპოლოს მისიის მთავარი პროგრამული ინჟინერი",
      points: [
        "მარგარეტი იყო პროგრამული უზრუნველყოფის ინჟინერიის დირექტორი MIT-ის ინსტრუმენტაციის ლაბორატორიაში, რომელიც NASA-სთან თანამშრომლობდა.",
        "იგი ხელმძღვანელობდა გუნდს, რომელმაც შეიმუშავა ფრენის onboard პროგრამა Apollo-ის მისიისთვის — მათ შორის Apollo 11, პირველი მისია, რომელმაც 1969 წელს მთვარეზე დასვა ადამიანი.",
      ],
      legacy: `🚀 <span>მემკვიდრეობა:</span> პროგრამული ინჟინერიის გამოგონება მის სახელს უკავშირდება.`,
      link: "იხილეთ მეტი...",
    },
    sheryl: {
      heading: "შერლ სანდბერგი (1969)",
      contribution: "შესწორი: Facebook / Meta-ს ოპერაციული დირექტორი",
      points: [
        "ტრანსფორმაცია გაუკეთა Facebook-ს — სწრაფად მზარდი სტარტაპიდან გლობალურ, მოგებიან ბიზნესად.",
        "შექმნა და განავითარა რეკლამის მოდელი, რომელმაც Facebook ერთ-ერთ უდიდეს ციფრულ სარეკლამო პლატფორმად აქცია.",
        "აღაშენა კომპანიის ოპერაციები, ადამიანური რესურსები, გაყიდვები და მარკეტინგი, რაც დაეხმარა Facebook-ს 2012 წელს ბირჟაზე გასვლაში.",
      ],
      legacy:
        "🧠 <span>მემკვიდრეობა:</span> ლიდერობა ტექნოლოგიებში — Facebook / Meta",
      link: "იხილეთ მეტი...",
    },
    reshma: {
      heading: "რეშმა საუჯანი (1975)",
      contribution: "შესწორი: Girls Who Code-ის დამფუძნებელი",
      points: [
        "შექმნა არასამთავრობო ორგანიზაცია Girls Who Code, რათა ახალგაზრდებს, განსაკუთრებით გოგონებს, მიეცათ კომპიუტერული უნარები.",
        "პროგრამამ მიაღწია 500,000-ზე მეტ გოგონას მთელს მსოფლიოში, განსაკუთრებული ყურადღებით უმცირესობებზე.",
        "საკუთარი საქმიანობით მნიშვნელოვნად გაზარდა კომპიუტერული მეცნიერების და ტექნოლოგიების სფეროში გოგონების რიცხვი.",
      ],
      legacy:
        "🛠 <span>მემკვიდრეობა:</span> გავლენა ტექნოლოგიასა და განათლებაზე",
      link: "იხილეთ მეტი...",
    },
    feiFei: {
      heading: "ფეი-ფეი ლი (1976)",
      contribution: "შესწორი: ImageNet-ის შექმნა",
      points: [
        "2006 წელს წამოიწყო ImageNet პროექტი, რომლის ფარგლებშიც შეიქმნა 14 მილიონზე მეტი სურათისგან შემდგარი მასიური, მონიშნული სურათების მონაცემთა ნაკრები, რომელიც ათასობით ობიექტის კატეგორიას მოიცავდა.",
        "ეს მონაცემთა ნაკრები და მისი ყოველწლიური ImageNet გამოწვევა გადამწყვეტი როლი ითამაშა ღრმა სწავლების რევოლუციის კატალიზებაში, რაც განსაკუთრებით მნიშვნელოვანი იყო ისეთი მიღწევების გავლენით, როგორიცაა AlexNet 2012 წელს.",
        "2009 წელს შეუერთდა სტენფორდს, ხელმძღვანელობდა სტენფორდის ხელოვნური ინტელექტის ლაბორატორიას (2013–2018) და 2019 წელს იყო ადამიანზე ორიენტირებული ხელოვნური ინტელექტის ინსტიტუტის (HAI) თანადამფუძნებელი.",
      ],
      legacy:
        "🛠 <span>მემკვიდრეობა:</span> ხელოვნური ინტელექტისა და კომპიუტერული ხედვის პიონერული კვლევა",
      link: "იხილეთ მეტი...",
    },
    Parisa: {
      heading: "პარისა ტაბრიზი (1983)",
      contribution:
        "წვლილი: პარისა ტაბრიზი არის ცნობილი ირანელ-ამერიკელი კომპიუტერული უსაფრთხოების ექსპერტი და ტექნოლოგიების ლიდერი.",
      points: [
        "Google Chrome-ის ლიდერობა: პარისა ტაბრიზი Google Chrome-ის ვიცე-პრეზიდენტისა და გენერალური მენეჯერის თანამდებობას იკავებს და ზედამხედველობას უწევს მსოფლიოში ერთ-ერთი ყველაზე ფართოდ გამოყენებული ვებ ბრაუზერის განვითარებასა და უსაფრთხოებას.",
        "პროექტი ნული: ის მართავს პროექტ ნულს, Google-ის ელიტარულ გუნდს, რომელიც ეძღვნება ნულოვანი დღის დაუცველობების იდენტიფიცირებას და მათ მოგვარებას, რითაც აუმჯობესებს ინტერნეტის საერთო უსაფრთხოებას.",
      ],
      legacy:
        "🚀 <span>მემკვიდრეობა:</span> სიყვარულით ცნობილი, როგორც Google-ის „უსაფრთხოების პრინცესა“, მან მნიშვნელოვანი გავლენა მოახდინა კიბერუსაფრთხოების ლანდშაფტზე თავისი ლიდერობით, ადვოკატირებით და უსაფრთხოებისადმი ინოვაციური მიდგომით.",
      link: "იხილეთ მეტი...",
    },
    Kimberly: {
      heading: "კიმბერლი ბრაიანტი (1967)",
      contribution:
        "შესწორი: ამერიკელი ელექტროინჟინერი და Black Girls CODE-ის დამფუძნებელი.",
      points: [
        "ბიოტექნოლოგიური და ფარმაცევტული ინდუსტრია: 20 წელზე მეტი ხნის განმავლობაში იკავებდა საინჟინრო და ტექნიკური ლიდერის თანამდებობებს Fortune 100 კომპანიებში, როგორიცაა Genentech, Merck და Pfizer.",
        "Black Girls CODE-ის დამფუძნებელი: დაარსდა 2011 წელს, რათა ფერადკანიანი გოგონებისთვის ტექნოლოგიური განათლება მიეწოდებინა, ციფრული უთანასწორობის აღმოფხვრისა და ტექნოლოგიებში მრავალფეროვნების გაზრდის მიზნით.",
      ],
      legacy:
        "🚀 <span>მემკვიდრეობა:</span> მისმა საქმიანობამ მნიშვნელოვანი გავლენა მოახდინა შავკანიანი ქალების წარმომადგენლობაზე STEM სფეროებში",
      link: "იხილეთ მეტი...",
    },
    Tiera: {
      heading: "ტიერა გინ ფლეტჩერი (1995)",
      contribution:
        "შესწორი: ტიერა გინ ფლეტჩერი არის ამერიკელი აერონავტიკის ინჟინერი, რომელიც აღიარებულია NASA-ს კოსმოსური გაშვების სისტემაში შეტანილი მნიშვნელოვანი წვლილისთვის.",
      points: [
        "2017 წლის Good Housekeeping-ის შესანიშნავი ქალის ჯილდო.",
        "ალბერტ ჯ. ჰილის პრემია MIT-ში აკადემიური წარმატებისა და კამპუსის მრავალფეროვნებაში შეტანილი წვლილისთვის.",
      ],
      legacy:
        "🚀 <span>მემკვიდრეობა:</span> ატლანტას დიდ რაიონში დაბადებული ფლეტჩერი 11 წლის ასაკში Lockheed Martin-ის პროგრამის მეშვეობით ადრეულ ასაკში დაინტერესდა აერონავტიკის ინჟინერიით.",
      link: "იხილეთ მეტი...",
    },

    resources: [
      {
        title: "ისწავლე კოდირება",
        text: "უფასო პლატფორმები და გაკვეთილები დასაწყებად.",
        button: "იხილეთ მეტი...",
      },
      {
        title: "სამსახურისთვის მზადება და ინტერვიუები",
        text: "რჩევები, სიმულაციური ინტერვიუები და რეზიუმეს შაბლონები სპეციალურად შენთვის.",
        button: "იხილეთ მეტი...",
      },
      {
        title: "იპოვე მენტორი",
        text: "დაკავშირდი გამოცდილი ქალებთან ტექნოლოგიებში, რომლებიც მზად არიან დაგეხმარონ ზრდაში.",
        button: "იხილეთ მეტი...",
      },
      {
        title: "მენტალური ჯანმრთელობა",
        text: "როგორ გაუმკლავდე სტრესს, თვითმოტყუებას და გადაღლილობას ტექნოლოგიების სფეროში.",
        button: "იხილეთ მეტი...",
      },
    ],
  },
};

function setLanguage(lang) {
  const t = translations[lang];

  // General texts
  document.querySelector(".mission-text h2").textContent = t.missionTitle;
  document.querySelector(".mission-text p").textContent = t.missionText;
  document.querySelector("#stories h2").textContent = t.storyHeader;
  document.querySelector("#resources h2").textContent = t.resourcesTitle;

  const cards = document.querySelectorAll(".card");

  // Ada Lovelace
  if (cards[0]) {
    cards[0].querySelector("h3").textContent = t.ada.heading;
    cards[0].querySelector("p").textContent = t.ada.contribution;
    const listItems = cards[0].querySelectorAll("ul li");
    t.ada.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[0].querySelectorAll("p")[1].innerHTML = t.ada.legacy;
    cards[0].querySelector("button a").textContent = t.ada.link;
  }

  // Grace Hopper
  if (cards[1]) {
    cards[1].querySelector("h3").textContent = t.grace.heading;
    cards[1].querySelector("p").textContent = t.grace.contribution;
    const listItems = cards[1].querySelectorAll("ul li");
    t.grace.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[1].querySelectorAll("p")[1].innerHTML = t.grace.legacy;
    cards[1].querySelector("button a").textContent = t.grace.link;
  }

  // Annie Easley
  if (cards[2]) {
    cards[2].querySelector("h3").textContent = t.annie.heading;
    cards[2].querySelector("p").textContent = t.annie.contribution;
    const listItems = cards[2].querySelectorAll("ul li");
    t.annie.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[2].querySelectorAll("p")[1].innerHTML = t.annie.legacy;
    cards[2].querySelector("button a").textContent = t.annie.link;
  }

  // Katherine Johnson
  if (cards[3]) {
    cards[3].querySelector("h3").textContent = t.katherine.heading;
    cards[3].querySelector("p").textContent = t.katherine.contribution;
    const listItems = cards[3].querySelectorAll("ul li");
    t.katherine.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[3].querySelectorAll("p")[1].innerHTML = t.katherine.legacy;
    cards[3].querySelector("button a").textContent = t.katherine.link;
  }

  // Hedy Lamarr
  if (cards[4]) {
    cards[4].querySelector("h3").textContent = t.hedy.heading;
    cards[4].querySelector("p").textContent = t.hedy.contribution;
    const listItems = cards[4].querySelectorAll("ul li");
    t.hedy.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[4].querySelectorAll("p")[1].innerHTML = t.hedy.legacy;
    cards[4].querySelector("button a").textContent = t.hedy.link;
  }

  // Margaret Hamilton
  if (cards[5]) {
    cards[5].querySelector("h3").textContent = t.margaret.heading;
    cards[5].querySelector("p").textContent = t.margaret.contribution;
    const listItems = cards[5].querySelectorAll("ul li");
    t.margaret.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[5].querySelectorAll("p")[1].innerHTML = t.margaret.legacy;
    cards[5].querySelector("button a").textContent = t.margaret.link;
  }

  // Sheryl Sandberg
  if (cards[6]) {
    cards[6].querySelector("h3").textContent = t.sheryl.heading;
    cards[6].querySelector("p").textContent = t.sheryl.contribution;
    const listItems = cards[6].querySelectorAll("ul li");
    t.sheryl.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[6].querySelectorAll("p")[1].innerHTML = t.sheryl.legacy;
    cards[6].querySelector("button a").textContent = t.sheryl.link;
  }

  // reshma
  if (cards[7]) {
    cards[7].querySelector("h3").textContent = t.reshma.heading;
    cards[7].querySelector("p").textContent = t.reshma.contribution;
    const listItems = cards[7].querySelectorAll("ul li");
    t.reshma.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[7].querySelectorAll("p")[1].innerHTML = t.reshma.legacy;
    cards[7].querySelector("button a").textContent = t.reshma.link;
  }

  // feiFei
  if (cards[8]) {
    cards[8].querySelector("h3").textContent = t.feiFei.heading;
    cards[8].querySelector("p").textContent = t.feiFei.contribution;
    const listItems = cards[8].querySelectorAll("ul li");
    t.feiFei.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[8].querySelectorAll("p")[1].innerHTML = t.feiFei.legacy;
    cards[8].querySelector("button a").textContent = t.feiFei.link;
  }

  // Parisa
  if (cards[9]) {
    cards[9].querySelector("h3").textContent = t.Parisa.heading;
    cards[9].querySelector("p").textContent = t.Parisa.contribution;
    const listItems = cards[9].querySelectorAll("ul li");
    t.Parisa.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[9].querySelectorAll("p")[1].innerHTML = t.Parisa.legacy;
    cards[9].querySelector("button a").textContent = t.Parisa.link;
  }

  // Kimberly
  if (cards[10]) {
    cards[10].querySelector("h3").textContent = t.Kimberly.heading;
    cards[10].querySelector("p").textContent = t.Kimberly.contribution;
    const listItems = cards[10].querySelectorAll("ul li");
    t.Kimberly.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[10].querySelectorAll("p")[1].innerHTML = t.Kimberly.legacy;
    cards[10].querySelector("button a").textContent = t.Kimberly.link;
  }

  // Tiera
  if (cards[11]) {
    cards[11].querySelector("h3").textContent = t.Tiera.heading;
    cards[11].querySelector("p").textContent = t.Tiera.contribution;
    const listItems = cards[11].querySelectorAll("ul li");
    t.Tiera.points.forEach((point, i) => {
      if (listItems[i]) listItems[i].textContent = point;
    });
    cards[11].querySelectorAll("p")[1].innerHTML = t.Tiera.legacy;
    cards[11].querySelector("button a").textContent = t.Tiera.link;
  }

  // resources
  const resourceCards = document.querySelectorAll(".resources-card");
  t.resources.forEach((resource, i) => {
    if (resourceCards[i]) {
      resourceCards[i].querySelector("h3").textContent = resource.title;
      resourceCards[i].querySelector("p").textContent = resource.text;
      resourceCards[i].querySelector("button a").textContent = resource.button;
    }
  });
}