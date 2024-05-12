export interface Band {
    id: number
    band: string;
    logo: string;
    chara: Array<Chara>;
}

export interface Chara {
    id: number;
    enable: boolean;
    name: string;
    name_en: string;
    color: `rgb(${number}, ${number}, ${number})` | `#${string}`;
    image: string;
    link: string;
}

export const bands: Array<Band> = [
    {
        id: 1,
        band: 'Poppin\' Party',
        logo: '/characters/popipa_logoL.png',
        chara: [
            {
                id: 4,
                enable: true,
                name: '山吹 沙綾',
                name_en: 'Saya Yamabuki',
                color: '#FFCC11',
                image: '/characters/004_p.png',
                link: '/chara/004',
            },
            {
                id: 2,
                enable: true,
                name: '花園 たえ',
                name_en: 'Tae Hanazono',
                color: '#0077DD',
                image: '/characters/002_p.png',
                link: '/chara/002',
            },
            {
                id: 1,
                enable: true,
                name: '戸山 香澄',
                name_en: 'Kasumi Toyama',
                color: '#FF5522',
                image: '/characters/001_p.png',
                link: '/chara/001',
            },
            {
                id: 3,
                enable: true,
                name: '牛込 りみ',
                name_en: 'Rimi Ushigomi',
                color: '#FF55BB',
                image: '/characters/003_p.png',
                link: '/chara/003',
            },
            {
                id: 5,
                enable: true,
                name: '市ヶ谷 有咲',
                name_en: 'Arisa Ichigaya',
                color: '#AA66DD',
                image: '/characters/005_p.png',
                link: '/chara/005',
            },
        ]
    },
    {
        id: 2,
        band: 'Afterglow',
        logo: '/characters/ag_logoL.png',
        chara: [
            {
                id: 9,
                enable: false,
                name: '宇田川 巴',
                name_en: 'Tomoe Udagawa',
                color: '#bb0033',
                image: '/characters/009_p.png',
                link: '/chara/009',
            },
            {
                id: 7,
                enable: true,
                name: '青葉 モカ',
                name_en: 'Moka Aoba',
                color: '#00ccaa',
                image: '/characters/007_p.png',
                link: '/chara/007',
            },
            {
                id: 6,
                enable: true,
                name: '美竹 蘭',
                name_en: 'Ran Mitake',
                color: '#ee0022',
                image: '/characters/006_p.png',
                link: '/chara/006',
            },
            {
                id: 8,
                enable: false,
                name: '上原 ひまり',
                name_en: 'Himari Uehara',
                color: '#ff9999',
                image: '/characters/008_p.png',
                link: '/chara/008',
            },
            {
                id: 10,
                enable: true,
                name: '羽沢 つぐみ',
                name_en: 'Tsugumi Hazawa',
                color: '#ffee88',
                image: '/characters/010_p.png',
                link: '/chara/010',
            }
        ]
    },
    {
        id: 3,
        band: 'ハロー、ハッピーワールド！',
        logo: '/characters/hhw_logoL.png',
        chara: [
            {
                id: 14,
                enable: true,
                name: '松原 花音',
                name_en: 'Kanon Matsubara',
                color: '#44DDFF',
                image: '/characters/014_p.png',
                link: '/chara/014',
            },
            {
                id: 12,
                enable: false,
                name: '瀬田 薫',
                name_en: 'Kaoru Seta',
                color: '#AA33CC',
                image: '/characters/012_p.png',
                link: '/chara/012',
            },
            {
                id: 11,
                enable: true,
                name: '弦巻こころ',
                name_en: 'Kokoro Tsurumaki',
                color: '#FFEE22',
                image: '/characters/011_p.png',
                link: '/chara/011',
            },
            {
                id: 13,
                enable: false,
                name: '北沢 はぐみ',
                name_en: 'Hagumi Kitazawa',
                color: '#FF9922',
                image: '/characters/013_p.png',
                link: '/chara/013',
            },
            {
                id: 15,
                enable: false,
                name: '奥澤 美咲',
                name_en: 'Misaki Okusawa',
                color: '#006699',
                image: '/characters/015_p.png',
                link: '/chara/015',
            }
        ]
    },
    {
        id: 4,
        band: 'Pastel＊Palettes',
        logo: '/characters/pp_logoL.png',
        chara: [
            {
                id: 19,
                enable: false,
                name: '大和 麻弥',
                name_en: 'Maya Yamato',
                color: '#99DD88',
                image: '/characters/019_p.png',
                link: '/chara/019',
            },
            {
                id: 17,
                enable: true,
                name: '氷川 日菜',
                name_en: 'Hina Hikawa',
                color: '#55DDEE',
                image: '/characters/017_p.png',
                link: '/chara/017',
            },
            {
                id: 16,
                enable: true,
                name: '丸山 彩',
                name_en: 'Aya Maruyama',
                color: '#FF88BB',
                image: '/characters/016_p.png',
                link: '/chara/016',
            },
            {
                id: 18,
                enable: true,
                name: '白鷺 千聖',
                name_en: 'Chisato Shirasagi',
                color: '#FFEEAA',
                image: '/characters/018_p.png',
                link: '/chara/018',
            },
            {
                id: 20,
                enable: false,
                name: '若宮 イヴ',
                name_en: 'Eve Wakamiya',
                color: '#DDBBFF',
                image: '/characters/020_p.png',
                link: '/chara/020',
            }
        ]
    },
    {
        id: 5,
        band: 'Roselia',
        logo: '/characters/r_logoL.png',
        chara: [
            {
                id: 24,
                enable: true,
                name: '宇田川 あこ',
                name_en: 'Ako Udagawa',
                color: '#DD0088',
                image: '/characters/024_p.png',
                link: '/chara/024',
            },
            {
                id: 22,
                enable: true,
                name: '氷川 紗夜',
                name_en: 'Sayo Hikawa',
                color: '#00AABB',
                image: '/characters/022_p.png',
                link: '/chara/022',
            },
            {
                id: 21,
                enable: true,
                name: '湊 友希那',
                name_en: 'Yukina Minato',
                color: '#881188',
                image: '/characters/021_p.png',
                link: '/chara/021',
            },
            {
                id: 23,
                enable: true,
                name: '今井 リサ',
                name_en: 'Lisa Imai',
                color: '#DD2200',
                image: '/characters/023_p.png',
                link: '/chara/023',
            },
            {
                id: 25,
                enable: true,
                name: '白金 燐子',
                name_en: 'Rinko Shirokane',
                color: '#BBBBBB',
                image: '/characters/025_p.png',
                link: '/chara/025',
            }
        ]
    },
    {
        id: 6,
        band: 'Morfonica',
        logo: '/characters/m_logoL.png',
        chara: [
            {
                id: 29,
                enable: true,
                name: '二葉 つくし',
                name_en: 'Tsukushi Futaba',
                color: '#EE7788',
                image: '/characters/029_p.png',
                link: '/chara/029',
            },
            {
                id: 27,
                enable: false,
                name: '桐ヶ谷 透子',
                name_en: 'Toko Kirigaya',
                color: '#EE6666',
                image: '/characters/027_p.png',
                link: '/chara/027',
            },
            {
                id: 26,
                enable: true,
                name: '倉田 ましろ',
                name_en: 'Mashiro Kurata',
                color: '#6677CC',
                image: '/characters/026_p.png',
                link: '/chara/026',
            },
            {
                id: 28,
                enable: true,
                name: '広町 七深',
                name_en: 'Nanami Hiromachi',
                color: '#EE7744',
                image: '/characters/028_p.png',
                link: '/chara/028',
            },
            {
                id: 30,
                enable: false,
                name: '八潮 瑠唯',
                name_en: 'Rui Yashio',
                color: '#669988',
                image: '/characters/030_p.png',
                link: '/chara/030',
            }
        ]
    },
    {
        id: 7,
        band: 'RAISE A SUILEN',
        logo: '/characters/ras_logoL.png',
        chara: [
            {
                id: 34,
                enable: true,
                name: 'パレオ',
                name_en: 'PAREO',
                color: '#FF99BB',
                image: '/characters/034_p.png',
                link: '/chara/034',
            },
            {
                id: 32,
                enable: false,
                name: 'ロック',
                name_en: 'LOCK',
                color: '#AAEE22',
                image: '/characters/032_p.png',
                link: '/chara/032',
            },
            {
                id: 31,
                enable: true,
                name: 'レイヤ',
                name_en: 'LAYER',
                color: '#CC0000',
                image: '/characters/031_p.png',
                link: '/chara/031',
            },
            {
                id: 33,
                enable: false,
                name: 'マスキング',
                name_en: 'MASKING',
                color: '#EEBB44',
                image: '/characters/033_p.png',
                link: '/chara/033',
            },
            {
                id: 35,
                enable: false,
                name: 'チュチュ',
                name_en: 'CHU²',
                color: '#00BBFF',
                image: '/characters/035_p.png',
                link: '/chara/035',
            }
        ]
    },
    {
        id: 8,
        band: 'MyGO',
        logo: '/characters/mygo_logoL.png',
        chara: [
            {
                id: 39,
                enable: false,
                name: '長崎 そよ',
                name_en: 'Soyo Nagasaki',
                color: '#FFDD88',
                image: '/characters/039_p.png',
                link: '/chara/039',
            },
            {
                id: 37,
                enable: true,
                name: '千早 愛音',
                name_en: 'Anon Chihaya',
                color: '#FF8899',
                image: '/characters/037_p.png',
                link: '/chara/037',
            },
            {
                id: 36,
                enable: true,
                name: '高松 燈',
                name_en: 'Tomori Takamatsu',
                color: '#77BBDD',
                image: '/characters/036_p.png',
                link: '/chara/036',
            },
            {
                id: 38,
                enable: true,
                name: '要 楽奈',
                name_en: 'Rana Kaname',
                color: '#77DD77',
                image: '/characters/038_p.png',
                link: '/chara/038',
            },
            {
                id: 40,
                enable: false,
                name: '椎名 立希',
                name_en: 'Taki Shiina',
                color: '#7777AA',
                image: '/characters/040_p.png',
                link: '/chara/040',
            }
        ]
    }
]

export const idCharaMap = bands.map((band) => band.chara.map((chara) => {
    return {
        ...chara,
        strid: chara.id.toString().padStart(3, '0')
    }
})).flat()
