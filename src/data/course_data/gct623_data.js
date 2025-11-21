export const gct623_data = [
    {
        course_info: {
            code: "GCT & MV 623 Spring 2025", 
            title: "Interaction Sensing Principle & Application",
            desc: "This course will educate core principles of 3D & Physical sensing adopted for human-computer interaction. We will cover basic optics for 3D sensing and basic knowledge of each component for physical sensing. Also, we will look at applications where 3D & physical sensing is combined to provide interaction.",
        },
        prof: [
            {name: "Prof. Sang Ho Yoon", link: "https://sanghoy.com/"},
            {name: "Prof. Jae Sang Hyun", link: "https://sites.google.com/view/damislab"},
        ],
        ta: [
            {name: "Changhyeon Park (KAIST)", link: ""},
        ],
        time: "14:30-16:00 Tue/Thu",
        loc: "Zoom (N5#2332 for offline presentations)",
        submission: {name: "KLMS", link: "https://klms.kaist.ac.kr/"},
        discussion: {name: "Email to instructors", link: ""},
        announcements: [],
        schedule: [/*
            {
                day1: {
                  date: "2/25", 
                  titles: ["No Class"], 
                  type: 2,
                  notes: [], 
                  dues: []
                },
                day2: { date: "2/27", titles: ["No Class"], type: 2, notes: [], dues: [] }
              },
              {
                day1: { date: "3/4", titles: ["Introduction & Course Overview"], type: 0, notes: [], dues: [] },
                day2: { date: "3/6", titles: ["Introduction to 3D Sensor"], type: 0, notes: [], dues: [] }
              },
              {
                day1: {
                  date: "3/11", titles: ["Project Workshop"], type: 1,
                  notes: [{ name: 'Li et al. "Practical Stereo Matching via Cascaded Recurrent Network with Adaptive Correlation", CVPR, 2012', link: "https://doi.org/10.1109/CVPR52688.2022.01578", reading:true}],
                  dues: [{ name: "RR due by 3/14 (Thu) 11:59pm", link: "" }]
                },
                day2: {
                  date: "3/13", titles: ["Vision-based Sensor: Stereo Vision I"], type: 0,
                  notes: [],
                  dues: []
                }
              },
              {
                day1: {
                  date: "3/18", titles: ["Vision-based Sensor: Stereo Vision II"], type: 0,
                  notes: [{ name: "HW#1 Handout (KLMS)", link: "https://klms.kaist.ac.kr/" }],
                  dues: []
                },
                day2: {
                  date: "3/20", titles: ["Vision-based Sensor: Structured light Sensor"], type: 0,
                  notes: [],
                  dues: []
                }
              },
              {
                day1: {
                  date: "3/25", titles: ["Topic Presentation #1"], type: 1,
                  notes: [{ name: "Individual Team Meeting", link: "" }],
                  dues: []
                },
                day2: {
                  date: "3/27", titles: ["Project Proposal Q&A"], type: 1,
                  notes: [{ name: "Proposal Presentation Schedule", link: "https://docs.google.com/spreadsheets/d/1q77PmRXISpWT53ripXBx8S2zqSWug_WiRnRxYaFQL84/edit?gid=987640423#gid=987640423" }],
                  dues: [{ name: "HW#1 due by 3/27 (Thu) 11:59pm", link: "" },{ name: "Proposal Presentation Slides due by 3/31 (Mon) 11:59pm (All Teams)", link: "" }]
                }
              },
              {
                day1: {
                  date: "4/1", titles: ["Project Proposal Presentation"], type: 1,
                  notes: [{ name: 'Chen et al. "Comparative study on 3D optical sensors for short range applications", Optics and Lasers in Engineering, 2022', link: "https://doi.org/10.1016/j.optlaseng.2021.106763", reading:true }],
                  dues: []
                },
                day2: {
                  date: "4/3", titles: ["Digital Fringe Projection (1): Pinhole"], type: 0,
                  notes: [{ name: "HW#2 Handout (KLMS)", link: "" }],
                  dues: [{ name: "RR(Group A) due by 4/3 (Thu) 11:59pm", link: "" }]
                }
              },
              {
                day1: {
                  date: "4/8", titles: ["Topic Presentation #2", "Digital Fringe Projection (2): Phase"], type: 1,
                  notes: [{ name: "An et al. 'Pixel-wise absolute phase unwrapping using geometric constraints of structured light system', Optics Express, 2016", link: "https://doi.org/10.1364/OE.24.018445", reading:true }],
                  dues: []
                },
                day2: {
                  date: "4/10", titles: ["Digital Fringe Projection (3): Phase unwrapping method & 3D reconstruction"], type: 0,
                  notes: [],
                  dues: [
                    { name: "HW#2 due by 4/10 (Thu) 11:59pm", link: "" },
                    { name: "RR(Group B) due by 4/10 (Thu) 11:59pm", link: "" }
                  ]
                }
              },
              {
                day1: { date: "4/15", titles: ["Topic Presentation #3", "Digital Fringe Projection (4): 3D Data compression with phase"], 
                        type: 1, 
                        notes: [{ name: "Downsampled depth encoding for enhanced 3D range geometry compression, Applied Optics, 2022", link: "https://doi.org/10.1364/AO.445800", reading:true }
                        ], 
                        dues: [] },
                day2: {
                  date: "4/17", titles: ["No Class (Midterm)"], type: 2,
                  notes: [],
                  dues: [{ name: "RR(Group A) due by 4/17 (Thu) 11:59pm", link: "" }]
                }
              },
              {
                day1: {
                  date: "4/22", titles: ["No Class"], type: 2,
                  notes: [{ name: 'Grosse-Puppendahl et al. "Finding Common Ground: A Survey of Capacitive Sensing in Human-Computer Interaction", CHI 2017', link: "https://doi.org/10.1145/3025453.3025808", reading:true}],
                  dues: []
                },
                day2: {
                  date: "4/24", titles: ["Topic Presentation #4", "Introduction to Physical Sensing"], type: 1,
                  notes: [],
                  dues: []
                }
              },
              {
                day1: {
                  date: "4/29", titles: ["Project Progress Presentation"], type: 1,
                  notes: [{ name: "Presentation Schedule", link: "https://docs.google.com/spreadsheets/d/1q77PmRXISpWT53ripXBx8S2zqSWug_WiRnRxYaFQL84/edit?gid=987640423#gid=987640423" }],
                  dues: [{ name: "Progress Presentation Slides due by 4/28 (Mon) 11:59pm (All Teams)", link: "" }]
                },
                day2: {
                  date: "5/1", titles: ["Project Progress Feedback"], type: 1,
                  notes: [{ name: "Feedback Schedule", link: "https://docs.google.com/spreadsheets/d/1q77PmRXISpWT53ripXBx8S2zqSWug_WiRnRxYaFQL84/edit?gid=987640423#gid=987640423" }],
                  dues: []
                }
              },
              {
                day1: { date: "5/6", titles: ["No Class (National Holiday)"], type: 2, notes: [], 
                        dues: [{ name: "RR(Group A & B) due by 5/6 (Mon) 11:59pm", link: "" }] },
                day2: { date: "5/8", titles: ["Pressure/Touch Sensor I"], type: 0, notes: [], dues: [{ name: "Progress Report & Peer Evaluation due by 5/11 (Sun) 11:59pm", link: "" }] }
              },
              {
                day1: {
                  date: "5/13", titles: ["Pressure/Touch Sensor II", "Topic Presentation #5"], type: 1,
                  notes: [
                    { name: 'Xu et al. "Enabling Hand Gesture Customization on Wrist-Worn Devices", CHI 2022', link: "https://dl.acm.org/doi/10.1145/3491102.3501904", reading:true }, { name: "HW#3 Handout (KLMS)", link:""}
                  ],
                  dues: []
                },
                day2: { date: "5/15", titles: ["Inertial Measurement Unit Sensor"], type: 0, notes: [], dues: [{ name: "RR (Group B) due by 5/15 (Thu) 11:59pm", link: "" }] }
              },
              {
                day1: {
                  date: "5/20", titles: ["No Class (Admission Interview Day)"], type: 2,
                  notes: [{ name: 'Laput et al. "ViBand: High-Fidelity Bio-Acoustic Sensing Using Commodity Smartwatch Accelerometers", UIST 2016', link: "https://doi.org/10.1145/2984511.2984582", reading:true },
                    { name: "Substitute with CT Scape Participation on 5/30", link: "" }],
                  dues: []
                },
                day2: { date: "5/22", titles: ["Topic Presentation #6","Bioacoustic Sensing"], type: 1, notes: [{ name: 'Eddy et al. "A Framework and Call to Action for the Future Development of EMG-Based Input in HCI", CHI 2023', link: "https://doi.org/10.1145/3544548.3580962", reading:true }],
                dues: [{ name: "RR (Group A) due by 5/22 (Thu) 11:59pm", link: "" }, { name: "HW#3 due by 5/23 (Fri) 11:59pm", link: "" }] }
              },
              {
                day1: { date: "5/27", titles: ["Topic Presentation #7", "Physiological Sensing"], type: 1, notes: [{ name: "HW#4 Handout (KLMS)", link: "" }], dues: [{ name: "RR (Group B) due by 5/26 (Mon) 11:59pm", link: "" }] },
                day2: { date: "5/29", titles: ["Topic Presentation #8"], type: 1, notes: [], dues: [{ name: "HW#4 due by 6/2 (Mon) 11:59pm", link: "" }] }
              },
              {
                day1: {
                  date: "6/3", titles: ["No Class (Election Day)"], type: 2,
                  notes: [],
                  dues: []
                },
                day2: {
                  date: "6/5", titles: ["Final Presentation"], type: 1,
                  notes: [{ name: "Presentation Schedule", link: "https://docs.google.com/spreadsheets/d/1q77PmRXISpWT53ripXBx8S2zqSWug_WiRnRxYaFQL84/edit?gid=987640423#gid=987640423" }],
                  dues: [{ name: "Final Presentation Slides due by 6/4 (Wed) 11:59pm", link: "" }]
                }
              },
              {
                day1: { date: "6/10", titles: ["Final Presentation Feedback"], type: 1, notes: [], dues: [] },
                day2: {
                  date: "6/12", titles: ["No Class"], type: 2, notes: [], dues: [
                    { name: "Presentation Audience Evaluation due by 6/12 (Thu) 11:59pm", link: "" },
                    { name: "Final Report & Peer Evaluation due by 6/12 (Thu) 11:59pm", link: "" },
                    { name: "Final Video due by 6/12 (Thu) 11:59pm", link: "" },
                    { name: "Video Audience Evaluation due by 6/16 (Mon) 12pm", link: "" }
                  ]
                }
              }*/
        ],
        projects: [
            {
              "title": "Patchworks",
              "members": "Hyungwook Yi",
              "desc": "",
              "videoLink": "https://www.youtube.com/embed/Xgzp3jjFuYM",
              "recognition": ""
            },
            {
              "title": "Teleoperation Training",
              "members": "Teahyung Kim, Yeontae Kim, Juneseung Kim",
              "desc": "",
              "videoLink": "https://www.youtube.com/embed/ADCeS-0BLcY",
              "recognition": ""
            },
            {
              "title": "AnyBeat",
              "members": "Jeongmin Kim, Woosung Cho, Yerim Kim",
              "desc": "",
              "videoLink": "https://www.youtube.com/embed/DZMjpzFMIXM",
              "recognition": ""
            },
            {
              "title": "Damian Team",
              "members": "Seongjin An, Youngse Chang, Nyamdavaa Davaasuren",
              "desc": "",
              "videoLink": "https://www.youtube.com/embed/82d_jkS8G_E",
              "recognition": ""
            },
            {
              "title": "Shooting Posture Correction",
              "members": "Genesung Kang, Yongjin Kim, Hongmin Kim",
              "desc": "",
              "videoLink": "https://www.youtube.com/embed/Q9QVSam5n6U",
              "recognition": ""
            },
            {
              "title": "MYYSense",
              "members": "Youlee Kim, Yunha Yeo, Murad Eynizada",
              "desc": "",
              "videoLink": "https://www.youtube.com/embed/ESK_pPlJYkQ",
              "recognition": ""
            }
          ]
    },
    {
        course_info: {
            code: "GCT & MV 623 Spring 2024", 
            title: "Interaction Sensing Principle & Application",
            desc: "This course will educate core principles of 3D & Physical sensing adopted for human-computer interaction. We will cover basic optics for 3D sensing and basic knowledge of each component for physical sensing. Also, we will look at applications where 3D & physical sensing is combined to provide interaction.",
        },
        prof: [
            {name: "Prof. Sang Ho Yoon", link: "https://sanghoy.com/"},
            {name: "Prof. Jae Sang Hyun", link: "https://sites.google.com/view/damislab"},
        ],
        ta: [
            {name: "Jina Kim (KAIST)", link: ""},
        ],
        time: "9:00-10:30am Mon/Wed",
        loc: "Zoom (N5#2332 for offline presentations)",
        submission: {name: "KLMS", link: "https://klms.kaist.ac.kr/"},
        discussion: {name: "Email to instructors", link: ""},
        announcements: [],
        schedule: [],
        projects: [
            {
              "title": "Augmented Musical Gestures",
              "members": "Minju Baeck, Hyung-Il Yi",
              "desc": "Augmented Musical Gestures: Seamless Hand Tracking and Control for Performance Using IMU-Vision Sensor Fusion",
              "videoLink": "https://www.youtube.com/embed/HtCXZprNXCg",
              "recognition": ""
            },
            {
              "title": "XHand",
              "members": "Hanseok Jeong, Fangqing Li",
              "desc": "Two-Channel EMG and IMU-Based Hand Gesture Classification Using Wearable Wristband",
              "videoLink": "https://www.youtube.com/embed/B8ZJt8pxkbQ",
              "recognition": ""
            },
            {
              "title": "PreGraspHelper",
              "members": "Kyoungwhan Mheen, Min-yung Kim",
              "desc": "Virtual Objects Preparatory Manipulation for Grasping",
              "videoLink": "https://www.youtube.com/embed/Arj6c6rnZOc",
              "recognition": "Best Interactive Sensing Project, KCC 2024"
            },
            {
              "title": "VRmoji",
              "members": "Changhyeon Park, Youjin Sung",
              "desc": "Natural Avatar Movement based on Real-time Facial Expression Recognition System",
              "videoLink": "https://www.youtube.com/embed/47EE1jelaZo",
              "recognition": "Cool Video, KCC 2024"
            },
            {
              "title": "Team Yonsei",
              "members": "Wonhoe Kim, Jinhyuk Seok",
              "desc": "AR Pedestrian Assistant System",
              "videoLink": "https://www.youtube.com/embed/ziGnMZQkr0Q",
              "recognition": ""
            }          
          ]
    },
    {
        course_info: {
            code: "GCT & MV 623 Spring 2023", 
            title: "Interaction Sensing Principle & Application",
            desc: "This course will educate core principles of 3D & Physical sensing adopted for human-computer interaction. We will cover basic optics for 3D sensing and basic knowledge of each component for physical sensing. Also, we will look at applications where 3D & physical sensing is combined to provide interaction.",
        },
        prof: [
            {name: "Prof. Sang Ho Yoon", link: "https://sanghoy.com/"},
            {name: "Prof. Jae Sang Hyun", link: "https://sites.google.com/view/damislab"},
        ],
        ta: [
            {name: "Hyuckjin Jang (KAIST)", link: ""},
        ],
        time: "9:00-10:30am Mon/Wed",
        loc: "Zoom (N5#2332 for offline presentations)",
        submission: {name: "KLMS", link: "https://klms.kaist.ac.kr/"},
        discussion: {name: "Classum", link: "https://classum.com/"},
        announcements: [],
        schedule: [],
        projects: [
            {
              "title": "MetaHands",
              "members": "Kyungjin Seo, Jeonghoon Seo",
              "desc": "sEMG based Simultaneous Estimation of Hand Pose and Palm Force",
              "videoLink": "https://www.youtube.com/embed/fS6a6rfNG5M",
              "recognition": ""
            },
            {
              "title": "InFinIt",
              "members": "Jina Kim, Nicha Vanichvoranun",
              "desc": "Swiped-it!: One-handed Thumb-tip Interaction for Text Editing in XR",
              "videoLink": "https://www.youtube.com/embed/SFiDFJFhAPY",
              "recognition": "ISMAR 2023 Poster"
            },
            {
              "title": "Ch3 Game",
              "members": "Sehoon Tak, Donghoon Shin, Mincheol Choi, Jeonghyeop Son",
              "desc": "",
              "videoLink": "https://www.youtube.com/embed/5Us7tf8LCeo",
              "recognition": ""
            },
            {
              "title": "Sound Trigger Recognition",
              "members": "Minseong Kim, Chanjoon Park, Sanghoon Jeon, Byeongseok Kim",
              "desc": "",
              "videoLink": "https://www.youtube.com/embed/IXMEx_t4F_M",
              "recognition": ""
            },
            {
              "title": "Smart Sensing Gloves",
              "members": "Jinhui An, Sunghun Kim, Keunhee Cho",
              "desc": "",
              "videoLink": "https://www.youtube.com/embed/mWWUqPf3IKo",
              "recognition": ""
            },
            {
              "title": "Team Watch",
              "members": "Minju Baeck, Hyung-Il Yi",
              "desc": "",
              "videoLink": "https://www.youtube.com/embed/Dqe0tWA5bIw",
              "recognition": ""
            },
            {
              "title": "Indoor Navigation",
              "members": "Seungjae Son, Hyunwoo Kim, Gunhul Han, Donghyun Lee",
              "desc": "",
              "videoLink": "https://www.youtube.com/embed/UkngfwH2aqo",
              "recognition": ""
            }
        ]
    },
]