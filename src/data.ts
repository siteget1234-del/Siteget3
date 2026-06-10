import { NewsArticle, WeatherCity, Contributor } from "./types";

export const mockContributors: Contributor[] = [
  {
    id: "contributor-1",
    handle: "@sandeep_news",
    displayName: "Sandeep Shirguppe",
    bio: "Senior Political Correspondent. Writing about Maharashtra politics for over 10 years.",
    avatarUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=200&q=80",
    joinDate: Date.now() - 365 * 24 * 60 * 60 * 1000,
    stats: { totalArticles: 0, totalViews: 0, totalComments: 0, totalShares: 0 },
    badges: [],
    scores: { allTime: 0, monthly: 0, weekly: 0 },
    ranks: { allTime: 0, monthly: 0, weekly: 0 }
  },
  {
    id: "contributor-2",
    handle: "@payal_ent",
    displayName: "Payal Naik",
    bio: "Entertainment & Lifestyle Journalist. Keeping you updated with the latest trends.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    joinDate: Date.now() - 120 * 24 * 60 * 60 * 1000,
    stats: { totalArticles: 0, totalViews: 0, totalComments: 0, totalShares: 0 },
    badges: [],
    scores: { allTime: 0, monthly: 0, weekly: 0 },
    ranks: { allTime: 0, monthly: 0, weekly: 0 }
  },
  {
    id: "contributor-3",
    handle: "@rahul_tech",
    displayName: "Rahul Deshmukh",
    bio: "Technology enthusiast and science reporter. Demystifying tech for everyday users.",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    joinDate: Date.now() - 60 * 24 * 60 * 60 * 1000,
    stats: { totalArticles: 0, totalViews: 0, totalComments: 0, totalShares: 0 },
    badges: [],
    scores: { allTime: 0, monthly: 0, weekly: 0 },
    ranks: { allTime: 0, monthly: 0, weekly: 0 }
  }
];

export const mockArticles: NewsArticle[] = [
  {
    id: "news-1",
    title: "पुणे मेट्रोच्या तिसऱ्या टप्प्याचे काम अंतिम टप्प्यात; हिंजवडी ते शिवाजीनगर मार्गिका लवकरच खुली होणार",
    excerpt: "पुण्यातील आयटी हब मानल्या जाणाऱ्या हिंजवडीला शिवाजीनगरशी जोडणाऱ्या मेट्रो मार्गिकेचे काम वेगाने सुरू आहे. यामुळे हजारो आयटी कर्मचाऱ्यांचा प्रवास सुकर होणार आहे.",
    fullText: "**पुणे महानगर प्रदेश विकास प्राधिकरण (PMRDA)** च्या वतीने हिंजवडी ते शिवाजीनगर या तिसऱ्या मार्गिकेचे काम अंतिम टप्प्यात आले आहे. आज मेट्रो प्रशासनाने घेतलेल्या बैठकीत या कामाचा सविस्तर आढावा घेण्यात आला. हिंजवडीतील वाहतूक कोंडीतून मुक्तता मिळवण्यासाठी हा मेट्रो मार्ग अत्यंत महत्त्वाचा मानला जात आहे.\n\n### प्रमुख वैशिष्ट्ये\n\n- **मार्गिकेची लांबी:** एकूण २३ किलोमीटर अंतर.\n- **स्थानकांची संख्या:** एकूण २३ अद्ययावत स्थानके.\n- **संपूर्ण मार्ग:** उन्नत (Elevated) स्वरूपाचा.\n\nअत्याधुनिक कोचेस आणि प्रगत सिग्नलिंग प्रणालीसह ही मेट्रो धावणार आहे. तसेच शिवाजीनगर येथील जिल्हा न्यायालय मेट्रो स्टेशनवर इतर मार्गिकांशी ही मेट्रो जोडली जाणार आहे.\n\n> \"आमच्या सर्व तांत्रिक चाचण्या पूर्ण झाल्यावर येत्या वर्षाअखेरपर्यंत प्रवाशांच्या सेवेत ही मेट्रो दाखल होईल. या प्रकल्पामुळे पुणेकरांचा वेळ वाचेल आणि वाहतूक कोंडी सुटेल.\" — **प्रकल्प संचालक, पुणे मेट्रो**\n\nस्थानिक अधिकाऱ्यांनी दिलेल्या माहितीनुसार, या वर्षाच्या शेवटपर्यंत तांत्रिक चाचण्या पूर्ण करून प्रवाशांसाठी ही मार्गिका खुली करण्याचा निर्धार प्रशासनाने व्यक्त केला आहे. यामुळे शिवाजीनगर ते हिंजवडी अंतर अवघ्या **३० मिनिटांत** पार करणे शक्य होईल.",
    category: "महाराष्ट्र",
    imageUrl: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=80",
    date: "०८ जून २०२६",
    source: "Sandeep Shirguppe",
    views: 1240,
    likes: 85,
    commentsCount: 14,
    shares: 45,
    createdAt: Date.now() - 2 * 60 * 60 * 1000,
    trendingScore: 0,
    authorId: "contributor-1"
  },
  {
    id: "news-2",
    title: "राज्यातील नवीन राजकीय समीकरण: पुढील निवडणुकांची रणनीती",
    excerpt: "राज्यातील अनेक जिल्ह्यांमध्ये नवीन राजकीय समीकरणाची चर्चा सुरू असून, यामुळे सर्वच पक्षांची लगबग वाढली आहे. आगामी निवडणुका लवकरच होण्याची शक्यता आहे.",
    fullText: "राज्यातील राजकीय समीकरणे वेगाने बदलत असून, पुढील निवडणुकांच्या दृष्टीने सर्वच पक्षांनी मोर्चेबांधणीला सुरुवात केली आहे. विशेषतः सोलापूर, धाराशिव, बीड आणि लातूर जिल्ह्यात राजकीय बैठकांचे सत्र सुरू आहे.\n\nया घडामोडींमुळे कार्यकर्त्यांमध्ये उत्साह निर्माण झाला आहे. तसेच, नवीन आघाड्या उदयाला येण्याची शक्यता असल्यामुळे राजकीय वर्तुळात मोठी चर्चा सुरू झाली आहे.\n\nयेत्या काही दिवसांत चित्र अधिक स्पष्ट होण्याची शक्यता राजकीय तज्ज्ञांनी वर्तवली आहे.",
    category: "राजकारण",
    imageUrl: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=800&q=80",
    date: "०७ जून २०२६",
    source: "Rahul Deshmukh",
    views: 950,
    likes: 120,
    commentsCount: 8,
    shares: 20,
    createdAt: Date.now() - 24 * 60 * 60 * 1000,
    trendingScore: 0,
    authorId: "contributor-3"
  },
  {
    id: "news-3",
    title: "महाराष्ट्राचा वैभवशाली इतिहास: नवीन संशोधनातून उलगडले अनवट पैलू",
    excerpt: "नवीन ऐतिहासिक संशोधनातून महाराष्ट्राच्या वैभवशाली इतिहासाचे काही अनवट पैलू समोर आले आहेत. जुन्या कागदपत्रांच्या अभ्यासातून महत्त्वाची माहिती मिळाली आहे.",
    fullText: "अलीकडेच झालेल्या ऐतिहासिक संशोधनातून महाराष्ट्राच्या इतिहासातील अनेक नवनवीन गोष्टी उजेडात आल्या आहेत. जुन्या कागदपत्रांच्या आणि मोडी लिपीतील पत्रांच्या सखोल अभ्यासातून अभ्यासकांना महत्त्वाची माहिती मिळाली आहे.\n\nया संशोधनामुळे तत्कालीन सामाजिक आणि राजकीय परिस्थितीवर नवा प्रकाश पडला आहे. विशेषतः शिवकाळातील काही दुर्लक्षित पैलू नव्याने समोर येत आहेत.\n\nया महत्त्वपूर्ण माहितीमुळे इतिहास प्रेमींमध्ये आनंदाचे वातावरण असून, आगामी काळात याबाबत अधिक संशोधन होण्याची शक्यता आहे.",
    category: "इतिहास",
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32fc3e620?auto=format&fit=crop&w=800&q=80",
    date: "०७ जून २०२६",
    source: "Payal Naik",
    views: 2100,
    likes: 450,
    commentsCount: 32,
    shares: 115,
    createdAt: Date.now() - 48 * 60 * 60 * 1000,
    trendingScore: 0,
    authorId: "contributor-2"
  }
];

export const mockWeather: WeatherCity[] = [
  { id: "w1", city: "मुंबई", temp: 31, condition: "अंशतः ढगाळ", icon: "🌤" },
  { id: "w2", city: "पुणे", temp: 28, condition: "ढगाळ", icon: "☁" },
  { id: "w3", city: "नागपूर", temp: 41, condition: "निरभ्र", icon: "☀" },
  { id: "w4", city: "च. संभाजीनगर", temp: 34, condition: "पावसाळी", icon: "🌦" }
];
