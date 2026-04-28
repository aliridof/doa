/**
 * ratib-alattas.js
 * Data lengkap Ratib Al-Attas (31 Bagian).
 * Diambil utuh dari naskah PDF "Ratib al-Attas (Ejaan Indonesia)".
 */

const RATIB_ALATTAS_DATA = [
    { 
        "title": "1. Tawassul Pembuka", 
        "ar": "الْفَاتِحَةِ إِلَى حَضْرَةِ سَيِّدِنَا وَحَبِيبِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَآلِهِ وَصَحْبِهِ وَسَلَّمَ، وَ إِلَى رُوحِ سَيِّدِنَا الْحَبِيبِ عُمَرِ بِنْ عَبْدِ الرَّحْمَانِ الْعَطَاسِ ، صَاحِبِ الرَّاتِبِ، وَالشَّيْخِ عَلِيِّ بْنِ عَبْدِ اللَّهِ بَارَاسُ، وَإِلى رُوحِ سَيِّدِنَا الإِمَامِ الْحَبِيبِ أَحْمَددِ بِنْ حَسَنِ بنِ عَبْدِ اللَّهِ الْعَطَاسِ الْفَاتِحَةِ", 
        "lat": "Al-Fatihah ila hadhrati Sayyidina wa Habibina Muhammadin shallallahu 'alaihi wa alihi wa shahbihi wa sallam, wa ila ruhi Sayyidinal Habibi Umari bin Abdirrahmanil 'Attas, Shahibir Ratib, wasy Syaikh Ali bin Abdillahi Ba Ras, wa ila ruhi Sayyidinal Imamil Habibi Ahmadi bin Hasani bin Abdillahi l-'Attas, Al-Fatihah." 
    },
    { 
        "title": "2. Surah Al-Fatihah", 
        "ar": "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (١) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (٢) الرَّحْمَنِ الرَّحِيمِ (٣) مَالِكِ يَوْمِ الدِّينِ (٤) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (٥) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (٦) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (٧)", 
        "lat": "Bismillahirrahmanirrahim. Alhamdulillahi rabbil 'alamin. Arrahmanirrahim. Maliki yawmiddin. Iyyaka na'budu wa iyyaka nasta'in. Ihdinash shiratal mustaqim. Shirathalladzina an'amta 'alaihim ghairil maghdhubi 'alaihim waladh dhallin." 
    },
    { 
        "title": "3. Perlindungan (3x)", 
        "ar": "أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ", 
        "lat": "A'udzu billahis samiy'il 'alimi minasy syaithonir rojim. (3x)" 
    },
    { 
        "title": "4. Surah Al-Hashr: 21-22", 
        "ar": "لَوْ أَنْزَلْنَا هَذَا الْقُرْآنَ عَلَى جَبَلٍ لَرَأَيْتَهُ خَاشِعًا مُتَصَدِّعًا مِنْ خَشْيَةِ اللَّهِ وَتِلْكَ الأَمْثَالُ نَضْرِبُهَا لِلنَّاسِ لَعَلَّهُمْ يَتَفَكَّرُونَ (٢١) هُوَ اللَّهُ الَّذِي لا إِلَهَ إِلا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَنُ الرَّحِيمُ (٢٢)", 
        "lat": "Lau anzalna hadzal qur-ana 'ala jabalin lara-aitahu khasyi'an mutashaddi'an min khasy-yatillah. Wa tilkal amtsalu nadhribuha linnasi la'allahum yatafakkarun. Huwallahulladzi la ilaha illa huwa 'alimul ghaibi wasy syahadati huwar rahmanur rahim." 
    },
    { 
        "title": "5. Surah Al-Hashr: 23-24", 
        "ar": "هُوَ اللَّهُ الَّذِي لا إِلَهَ إِلا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتكَبِّرُ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ (٢٣) هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الأَسْمَاءُ الْحُسْنَى يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ (٢٤)", 
        "lat": "Huwallahulladzi la ilaha illa huwal malikul quddusus salamul mu'minul muhaiminul 'azizul jabbarul mutakabbir. Subhanallahi 'amma yusyrikun. Huwallahul khaliqul bari-ul mushawwiru lahul asma-ul husna. Yusabbihu lahu ma fis samawati wal ardhi wahuwal 'azizul hakim." 
    },
    { 
        "title": "6. Perlindungan (3x)", 
        "ar": "أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ", 
        "lat": "A'udzu billahis samiy'il 'alimi minasy syaithonir rojim. (3x)" 
    },
    { 
        "title": "7. Kalimat Perlindungan (3x)", 
        "ar": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", 
        "lat": "A'udzu bikalimatillahit tammaati min syarri ma khalaq. (3x)" 
    },
    { 
        "title": "8. Nama Allah (3x)", 
        "ar": "بِسْمِ اللَّهِ الَّذِي لا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", 
        "lat": "Bismillahilladzi la yadhurru ma'asmihi syai-un fil ardhi wala fis samai wahuwas samiy'ul 'alim. (3x)" 
    },
    { 
        "title": "9. Hawqalah (10x)", 
        "ar": "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ", 
        "lat": "Bismillahir rahmanir rahim, wala hawla wala quwwata illa billahil 'aliyyil 'adzhim. (10x)" 
    },
    { 
        "title": "10. Basmalah (3x)", 
        "ar": "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", 
        "lat": "Bismillahir rahmanir rahim. (3x)" 
    },
    { 
        "title": "11. Tahassun (3x)", 
        "ar": "بِسْمِ اللَّهِ تَحَصَّنَّا بِاللَّهِ بِسْمِ اللَّهِ تَوَكَّلْنَا عَلَى اللَّهِ", 
        "lat": "Bismillahi tahashshanna billah, bismillahi tawakkalna 'alallah. (3x)" 
    },
    { 
        "title": "12. Iman (3x)", 
        "ar": "بِسْمِ اللَّهِ آمَنَّا بِاللَّهِ وَمَنْ يُؤْمِنْ بِاللَّهِ لا خَوْفٌ عَلَيْهِ", 
        "lat": "Bismillahi amanna billah, waman yu'min billahi la khawfun 'alaihi. (3x)" 
    },
    { 
        "title": "13. Tasbih (3x)", 
        "ar": "سُبْحَانَ اللَّهِ عَزَّ اللَّهُ سُبْحَانَ اللَّهِ جَلَّ اللَّهُ", 
        "lat": "Subhanallahi 'azzallah, subhanallahi jallallah. (3x)" 
    },
    { 
        "title": "14. Tasbih & Hamdalah (3x)", 
        "ar": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ", 
        "lat": "Subhanallahi wa bihamdihi subhanallahil 'adzhim. (3x)" 
    },
    { 
        "title": "15. Tahlil & Takbir (4x)", 
        "ar": "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلا إِلَهَ إِلا اللَّهُ وَاللَّهُ أَكْبَرُ", 
        "lat": "Subhanallahi wal hamdu lillahi wala ilaha illallahu wallahu akbar. (4x)" 
    },
    { 
        "title": "16. Ya Latif (3x)", 
        "ar": "يَا لَطِيفًا بِخَلْقِهِ يَا عَلِيمًا بِخَلْقِهِ يَا خَبِيرًا بِخَلْقِهِ الْطُفْ بِنا يَا لَطِيفُ يَا عَلِيمُ يَا خَبِيرُ", 
        "lat": "Ya lathifan bi khalqihi ya 'aliman bi khalqihi ya khabiran bi khalqihi, ultuf bina ya lathifu ya 'alimu ya khabir. (3x)" 
    },
    { 
        "title": "17. Ya Latifan lam yazal (3x)", 
        "ar": "يَا لَطِيفًا لَمْ يَزَلْ الْطُفْ بِنا فِيمَا نَزَلْ إِنَّكَ لَطِيفٌ لَمْ تَزَلْ الْطُفْ بِنا وَالْمُسْلِمِينَ", 
        "lat": "Ya lathifan lam yazal ultuf bina fima nazal, innaka lathifun lam tazal ultuf bina wal muslimin. (3x)" 
    },
    { 
        "title": "18. Tahlil (40x)", 
        "ar": "لا إِلَهَ إِلا اللَّهُ", 
        "lat": "La ilaha illallah. (40x)" 
    },
    { 
        "title": "19. Hasbunallah (7x)", 
        "ar": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", 
        "lat": "Hasbunallahu wa ni'mal wakil. (7x)" 
    },
    { 
        "title": "20. Shalawat (11x)", 
        "ar": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ اللَّهُمَّ صَلِّ عَلَيْهِ وَسَلِّمْ", 
        "lat": "Allahumma shalli 'ala muhammad, allahumma shalli 'alaihi wa sallim. (11x)" 
    },
    { 
        "title": "21. Istighfar (11x)", 
        "ar": "أَسْتَغْفِرُ اللَّهَ", 
        "lat": "Astaghfirullah. (11x)" 
    },
    { 
        "title": "22. Taubat (3x)", 
        "ar": "تَائِبُونَ إِلَى اللَّهِ", 
        "lat": "Ta-ibuna ilallah. (3x)" 
    },
    { 
        "title": "23. Husnul Khatimah (3x)", 
        "ar": "يَا اللَّهُ بِهَا يَا اللَّهُ بِهَا يَا اللَّهُ بِحُسْنِ الْخَاتِمَةِ", 
        "lat": "Ya Allahu biha ya Allahu biha ya Allahu bihusnil khatimah. (3x)" 
    },
    { 
        "title": "24. Surah Al-Baqarah: 285-286", 
        "ar": "غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ، لا يُكَلِّفُ اللَّهُ نَفْسًا إِلا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلا تُحَمِّلْنَا مَا لا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ.", 
        "lat": "Ghufranaka rabbana wa ilaikal mashir. La yukallifullahu nafsan illa wus'aha, laha ma kasabat wa 'alaiha maktasabat. Rabbana la tu-akhidzna in nasina aw akhta'na, rabbana wala tahmil 'alaina ishran kama hamaltahu 'alladzina min qablina, rabbana wala tuhammilna ma la thaqata lana bihi, wa'fu 'anna waghfir lana warhamna anta maulana fanshurna 'alal qaumil kafirin." 
    },
    { 
        "title": "25. Zikir", 
        "ar": "لا إِلَهَ إِلا اللَّهُ مُحَمَّدٌ رَسُوْلُ اللهِ (٣×) \n لا إِلَهَ إِلا اللَّهُ (٥×) \n لا إِلَهَ إِلا اللَّهُ اَلْمَلِكُ الْحَقُّ الْمُبِيْنُ (١٠×) \n لا إِلَهَ إِلا اللَّهُ (٢٥×)", 
        "lat": "La ilaha illallahu muhammadur rasulullah (3x). La ilaha illallah (5x). La ilaha illallahu almalikul haqqul mubin (10x). La ilaha illallah (25x)." 
    },
    { 
        "title": "26. Al-Fatihah kepada Nabi & Keluarga", 
        "ar": "اَلْفَاتِحَةِ إِلَى رُوْحِ سَيِّدِنَا رَسُوْلِ اللهِ مُحَمَّدِ بْنِ عَبْدِ اللهِ وَآلِهِ وَأَصْحَابِهِ وَأَزْوَاجِهِ وَذُرِّيَّاتِهِ، أَنَّ اللهَ يُعْلِي دَرَجَاتِهِمْ فِي الْجَنَّةِ، وَيَنْفَعُنَا بِأَسْرَارِهِمْ وَأَنْوَارِهِمْ وَعُلُوْمِهِمْ فِي الدِّيْنِ وَالدُّنْيَا وَالآخِرَةِ، اَلْفَاتِحَةِ", 
        "lat": "Al-Fatihah ila ruhi Sayyidina Rasulillahi Muhammadibni Abdillahi wa alihi wa ashabihi wa azwajihi wa dzurriyatihi, annallaha yu'li darajatihim fil jannati wa yanfa'una bi-as rarihim wa anwarihim wa 'ulumihim fiddini wad dunya wal akhirah. Al-Fatihah." 
    },
    { 
        "title": "27. Al-Fatihah kepada Al-Muhajir & Al-Faqih", 
        "ar": "اَلْفَاتِحَةِ إِلَى رُوْحِ سَيِّدِنَا الْمُهَاجِرِ إِلَى اللهِ أَحْمَدَ بْنِ عِيْسَى وَأُصُوْلِهِ وَفُرُوْعِهِ، وَإِلَى رُوْحِ سَيِّدِنَا الْفَقِيْهِ الْمُقَدَّمِ مُحَمَّدِ بْنِ عَلِيٍّ بَاعَلَوِيٍّ وَأُصُوْلِهِ وَفُرُوْعِهِ، وَجَمِيْعِ سَادَاتِنَا آلِ بَاعَلَوِيٍّ، أَنَّ اللهَ يَغْفِرُ لَهُمْ وَيَرْحَمُهُمْ وَيُعْلِي دَرَجَاتِهِمْ فِي الْجَنَّةِ، وَيَنْفَعُنَا بِأَسْرَارِهِمْ وَأَنْوَارِهِمْ وَعُلُوْمِهِمْ فِي الدِّيْنِ وَالدُّنْيَا وَالآخِرَةِ، اَلْفَاتِحَةِ", 
        "lat": "Al-Fatihah ila ruhi Sayyidinal Muhajiri ilallahi Ahmadabni 'Isa wa ushulih wa furu'ih, wa ila ruhi Sayyidinal Faqihil Muqaddami Muhammadibni 'Ali Ba 'Alawi wa ushulih wa furu'ih, wa jami'i sadatina ali Ba 'Alawi, annallaha yaghfiru lahum wayarhamuhum wayu'li darajatihim fil jannati wayanfa'una bi-as rarihim wa anwarihim wa 'ulumihim fiddini wad dunya wal akhirah. Al-Fatihah." 
    },
    { 
        "title": "28. Al-Fatihah kepada Penyusun Ratib", 
        "ar": "اَلْفَاتِحَةِ إِلَى رُوْحِ سَيِّدِنَا وَحَبِيْبِنَا وَبَرَكَتِنَا صَاحِبِ الرَّاتِبِ قُطْبِ الأَنْفَاسِ اَلْحَبِيْبِ عُمَرَ بْنِ عَبْدِ الرَّحْمَانِ الْعَطَّاسِ، ثُمَّ إِلَى رُوْحِ الشَّيْخِ عَلِيِّ بْنِ عَبْدِ اللهِ بَارَاسُ، وَأُصُوْلِهِمَا وَفُرُوْعِهِمَا، أَنَّ اللهَ يَغْفِرُ لَهُمْ وَيَرْحَمُهُمْ وَيُعْلِي دَرَجَاتِهِمْ فِي الْجَنَّةِ، وَيَنْفَعُنَا بِأَسْرَارِهِمْ وَأَنْوَارِهِمْ وَعُلُوْمِهِمْ وَنَفَحَاتِهِمْ فِي الدِّيْنِ وَالدُّنْيَا وَالآخِرَةِ، اَلْفَاتِحَةِ", 
        "lat": "Al-Fatihah ila ruhi Sayyidina wa Habibina wa barakatina Shahibir Ratib Quthbil Anfasil Habibi Umari bin Abdirrahmanil 'Attas, tsumma ila ruhi Syaikh Ali bin Abdillahi Ba Ras, wa ushulihima wa furu'ihima, annallaha yaghfiru lahum wayarhamuhum wayu'li darajatihim fil jannati wayanfa'una bi-as rarihim wa anwarihim wa 'ulumihim wa nafahatihim fiddini wad dunya wal akhirah. Al-Fatihah." 
    },
    { 
        "title": "29. Al-Fatihah kepada Para Awliya", 
        "ar": "اَلْفَاتِحَةِ إِلَى أَرْوَاحِ الأَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ، وَالأَئِمَّةِ الرَّاشِدِيْنَ، ثُمَّ إِلَى أَرْوَاحِ وَالِدِيْنَا وَمَشَايِخِنَا وَمُعَلِّمِيْنَا وَأَمْوَاتِ أَهْلِ هَذِهِ الْبَلْدَةِ مِنَ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ، أَنَّ اللهَ يَغْفِرُ لَهُمْ وَيَرْحَمُهُمْ وَيُعْلِي دَرَجَاتِهِمْ فِي الْجَنَّةِ، وَيَنْفَعُنَا بِأَسْرَارِهِمْ وَأَنْوَارِهِمْ وَعُلُوْمِهِمْ فِي الدِّيْنِ وَالدُّنْيَا وَالآخِرَةِ، اَلْفَاتِحَةِ", 
        "lat": "Al-Fatihah ila arwahil awliya' wasy syuhada' wash shalihin, wal aimmatir rasyidin, tsumma ila arwahi walidina wa masyayikhina wa mu'allimina wa amwati ahli hadzihil baldati minal muslimina wal muslimat, annallaha yaghfiru lahum wayarhamuhum wayu'li darajatihim fil jannati wayanfa'una bi-as rarihim wa anwarihim wa 'ulumihim fiddini wad dunya wal akhirah. Al-Fatihah." 
    },
    { 
        "title": "30. Al-Fatihah Penutup & Niat", 
        "ar": "اَلْفَاتِحَةِ بِالْقَبُوْلِ وَتَمَامِ كُلِّ سُوْلٍ وَمَأْمُوْلٍ، وَصَلاحِ الشَّأْنِ ظَاهِرًا وَبَاطِنًا فِي الدِّيْنِ وَالدُّنْيَا وَالآخِرَةِ، دَافِعَةً لِكُلِّ شَرٍّ جَالِبَةً لِكُلِّ خَيْرٍ، لَنَا وَلِوَالِدِيْنَا وَلأَوْلادِنَا وَلأَحْبَابِنَا وَلِمَشَايِخِنَا فِي الدِّيْنِ مَعَ اللُّطْفِ وَالْعَافِيَةِ، وَعَلَى نِيَّةِ أَنَّ اللهَ يُنَوِّرُ قُلُوْبَنَا وَقَوَالِبَنَا مَعَ الْهُدَى وَالتُّقَى وَالْعَفَافِ وَالْغِنَى، وَالْمَوْتِ عَلَى دِيْنِ الإِسْلامِ وَالإِيْمَانِ بِلا مِحْنَةٍ وَلا اخْتِبَارٍ، بِحَقِّ سَيِّدِ وَلَدِ عَدْنَانَ، وَجَمِيْعِ نِيَّاتِ الصَّالِحَةِ وَإِلَى حَضْرَةِ النَّبِيِّ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ، اَلْفَاتِحَةِ", 
        "lat": "Al-Fatihah bil qabuli wa tamami kulli sulin wa ma'mul, wa shalahisy sya'ni dhahiran wa bathinan fiddini wad dunya wal akhirah, dafi'atan likulli syarrin jalibatan likulli khairin, lana waliwalidina waliauladina waliahabina walimasyayikhina fiddini ma'al luthfi wal 'afiyah, wa 'ala niyyati annallaha yunawwiru qulubana wa qawalibana ma'al huda wat tuqa wal 'afafi wal ghina, wal mawti 'ala dinil islami wal imani bila mihnatin wala ikhtibar, bihaqqi sayyidi waladi 'adnan, wa jami'i niyyatis shalihah, wa ila hadhratin Nabiyyi Muhammadin shallallahu 'alaihi wa alihi wa sallam. Al-Fatihah." 
    },
    { 
        "title": "31. Doa Penutup", 
        "ar": "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ. اَلْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. حَمْدًا يُوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيْدَهُ. يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ. سُبْحَانَكَ لَا نُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ. فَلَكَ الْحَمْدُ حَتَّى تَرْضَى، وَلَكَ الْحَمْدُ إِذَا رَضِيْتَ، وَلَكَ الْحَمْدُ بَعْدَ الرِّضَا. اَللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْأَوَّلِيْنَ. وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْآخِرِيْنَ. وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي كُلِّ وَقْتٍ وَحِيْنٍ. وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْمَلَإِ الْأَعْلَى إِلَى يَوْمِ الدِّيْنِ. وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ حَتَّى تَرِثَ الْأَرْضَ وَمَنْ عَلَيْهَا وَأَنْتَ خَيْرُ الْوَارِثِيْنَ. اَللَّهُمَّ إِنَّا نَسْتَحْفِظُكَ وَنَسْتَوْدِعُكَ أَدْيَانَنَا وَأَنْفُسَنَا وَأَمْوَالَنَا وَأَهْلَنَا وَكُلَّ شَيْءٍ أَعْطَيْتَنَا. اَللَّهُمَّ اجْعَلْنَا وَإِيَّاهُمْ فِي كَنَفِكَ وَأَمَانِكَ وَعِيَاذِكَ مِنْ كُلِّ شَيْطَانٍ مَرِيْدٍ، وَجَبَّارٍ عَنِيْدٍ، وَذِي عَيْنٍ وَذِي بَغْيٍ وَذِي حَسَدٍ وَمِنْ شَرِّ كُلِّ ذِي شَرٍّ، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. اَللَّهُمَّ جَمِّلْنَا بِالْعَافِيَةِ وَالسَّلَامَةِ. وَحَقِّقْنَا بِالتَّقْوَى وَالْإِسْتِقَامَةِ. وَأَعِذْنَا مِنْ مُوْجِبَاتِ النَّدَامَةِ، إِنَّكَ سَمِيْعُ الدُّعَاءِ. اَللَّهُمَّ اغْفِرْ لَنَا وَلِوَالِدِيْنَا وَلِأَوْلَادِنَا وَلِمَشَايِخِنَا وَلِإِخْوَانِنَا فِي الدِّيْنِ وَلِأَصْحَابِنَا وَلِمَنْ أَحَبَّنَا فِيْكَ وَلِجَمِيْعِ الْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ وَالْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ يَا رَبَّ الْعَالَمِيْنَ. وَصَلِّ اَللَّهُمَّ عَلَى جَمَالِكَ الْأَكْمَلِ وَنُوْرِكَ الْأَجْمَلِ سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِيْنَ.", 
        "lat": "Bismillahirrahmanirrahim. Alhamdu lillahi rabbil 'alamin. Hamdan yuwafi ni'amahu wa yukafi'u mazidah. Ya Rabbana lakal hamdu kama yanbaghi lijalali wajhika wa 'adzimi sulthanik. Subhanaka la nuhshi tsana'an 'alaika anta kama atsnaita 'ala nafsika. Falakal hamdu hatta tardha, walakal hamdu idza radhita, walakal hamdu ba'dar ridha. Allahumma shalli wa sallim 'ala sayyidina muhammadin fil awwalin. Wa shalli wa sallim 'ala sayyidina muhammadin fil akhirin. Wa shalli wa sallim 'ala sayyidina muhammadin fi kulli waqtin wahin. Wa shalli wa sallim 'ala sayyidina muhammadin fil mala'il a'la ila yawmid din. Wa shalli wa sallim 'ala sayyidina muhammadin hatta taritsal ardha wa man 'alayha wa anta khairul waritsin. Allahumma inna nastahfidzhuka wa nastaudi'uka adyanana wa anfusana wa amwalana wa ahlana wa kulla syai'in a'thaitana. Allahummaj'alna wa iyyahum fi kanafika wa amanika wa 'iyadzika min kulli syaithanim marid, wa jabbarin 'anid, wa dzi 'ainin wa dzi baghyin wa dzi hasadin wa min syarri kulli dzi syarr, innaka 'ala kulli syai'in qadir. Allahumma jammilna bil 'afiyati was salamah. Wa haqqiqna bit taqwa wal istiqamah. Wa a'idzna min mujibatin nadamah, innaka sami'ud du'a. Allahummaghfir lana waliwalidina waliauladina walimasyayikhina wali-ikhwanina fiddini wali-ashhabina waliman ahabba-na fika walijami'il mu'minina wal mu'minati wal muslimina wal muslimati ya rabbal 'alamin. Washallillahumma 'ala jamalikal akmali wanurikal ajmali sayyidina muhammadin wa 'ala alihi wa shahbihi wa sallim walhamdu lillahi rabbil 'alamin." 
    }
];
