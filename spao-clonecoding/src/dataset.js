const dataset = {
    header: [
        {
            id: "01",
            title: "할인상품",
            url: "#",
            leftchildren:[],
            children: [],
            childBanners: []
        },
        {
            id: "02",
            title: "베스트",
            url: "#",
            leftchildren:[],
            children: [],
            childBanners: []
        },
        {
            id: "03",
            title: "우먼",
            url: "#",
            leftchildren:[
                {title: "신상품", url: "#"},
                {title: "베스트", url: "#"},
                {title: "전체보기", url: "#"},
            ],
            children: [
               {  title: "아우터", url: "#" },
               {  title: "상의", url: "#" },
               {  title: "하의", url: "#" },
               {  title: "데님", url: "#" },
               {  title: "원피스", url: "#" },
               {  title: "악세서리", url: "#" },
               {  title: "이너/언더웨어", url: "#" },
               {  title: "홈웨어/잠옷", url: "#" }
            ],
            childBanners: [
                { title: "/img/womanImg1.jpg", url: "#" },
                { title: "/img/womanImg2.jpg", url: "#" },
                { title: "/img/womanImg3.jpg", url: "#" }
            ]
        },
        {
            id: "04",
            title: "맨",
            url: "#",
            leftchildren:[
                {title: "신상품", url: "#"},
                {title: "베스트", url: "#"},
                {title: "전체보기", url: "#"},
            ],
            children: [
               {  title: "아우터", url: "#" },
               {  title: "상의", url: "#" },
               {  title: "하의", url: "#" },
               {  title: "데님", url: "#" },
               {  title: "악세서리", url: "#" },
               {  title: "이너/언더웨어", url: "#" },
               {  title: "홈웨어/잠옷", url: "#" }
            ],
            childBanners: [
                { title: "/img/manImg1.jpg", url: "#" },
                { title: "/img/manImg2.jpg", url: "#" },
                { title: "/img/manImg3.jpg", url: "#" }
            ]
        },
        {
            id: "05",
            title: "컬래버레이션",
            url: "#",
            leftchildren:[
                {title: "신상품", url: "#"},
                {title: "베스트", url: "#"},
                {title: "전체보기", url: "#"},
            ],
            children: [
               {  title: "잠옷", url: "#" },
               {  title: "상의", url: "#" },
               {  title: "잡화", url: "#" },
               {  title: "팬시/뷰티", url: "#" }
            ],
            childBanners: [
                { title: "/img/CollaborationImg1.jpg", url: "#" },
                { title: "/img/CollaborationImg2.jpg", url: "#" },
                { title: "/img/CollaborationImg3.jpg", url: "#" }
            ]
        },
        {
            id: "06",
            title: "키즈",
            url: "#",
            leftchildren:[
                {title: "신상품", url: "#"},
                {title: "베스트", url: "#"},
                {title: "전체보기", url: "#"},
            ],
            children: [
               {  title: "아우터", url: "#" },
               {  title: "상의", url: "#" },
               {  title: "하의", url: "#" },
               {  title: "원피스/스커트", url: "#" },
               {  title: "상하의세트", url: "#" },
               {  title: "홈웨어/잠옷", url: "#" },
               {  title: "악세서리", url: "#" }
            ],
            childBanners: [
                { title: "/img/kidsImg1.jpg", url: "#" },
                { title: "/img/kidsImg2.jpg", url: "#" }
            ]
        },
        {
            id: "07",
            title: "커뮤니티",
            url: "#",
            leftchildren:[
                {title: "런칭 캘린더", url: "#"},
                {title: "룩북", url: "#"},
                {title: "스냅", url: "#"},
                {title: "스파오TV", url: "#"},
                {title: "위클리 코디", url: "#"},
                {title: "리뷰", url: "#"},
                {title: "이벤트", url: "#"},
                {title: "채용정보", url: "#"}
            ],
            children: [
               {  title: "출석체크", url: "#" },
               {  title: "실시간 리뷰", url: "#" },
               {  title: "베스트 리뷰어 발표", url: "#" },
               {  title: "진행 이벤트", url: "#" },
               {  title: "종료 이벤트", url: "#" },
               {  title: "당첨자 발표", url: "#" },
            ],
            childBanners: [
                { title: "/img/communityImg1.jpg", url: "#" },
                { title: "/img/communityImg2.jpg", url: "#" },
                { title: "/img/communityImg3.jpg", url: "#" }
            ]
        },
    ],
    content:[
        {
            id:"B01",
            title: "[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01",
            img: "/img/weeklyBest/weeklyBestImg1.jpg",
            url: "#",
            nowPrice: "19,900",
            beforePrice: "29,900",
            discountPercent: "33%",
            colorChip: [
                {hexCode: "#FFFFFF"},
                {hexCode: "#B8BAB9"},
                {hexCode: "#000000"},
                {hexCode: "#F5F5DC"},
                {hexCode: "#03175E"},
                {hexCode: "#C7A1CC"},
                {hexCode: "#E2F7F0"},
                {hexCode: "#8D5C33"},
                {hexCode: "#C6D3E6"},
                {hexCode: "#E7DDDE"},
                {hexCode: "#EEDFC0"},
            ],
            review: "755",
        },
        {
            id:"B02",
            title: "파스텔 푸퍼_SPJPD4TG01",
            img: "/img/weeklyBest/weeklyBestImg2.jpg",
            url: "#",
            nowPrice: "64,900",
            beforePrice: "69,900",
            discountPercent: "7%",
            colorChip: [
                {hexCode: "#000000"},
                {hexCode: "#D9D2B0"},
                {hexCode: "#FFFEF7"},
                {hexCode: "#A8D2E8"},
                {hexCode: "#000000"},
                {hexCode: "#8D5C33"},
                {hexCode: "#FFFEF7"},
                {hexCode: "#C7A1C2"},
            ],
            review: "1,683",
        },
        {
            id:"B03",
            title: "파스텔 푸퍼 (코듀로이)_SPJPD4TG02",
            img: "/img/weeklyBest/weeklyBestImg3.jpg",
            url: "#",
            nowPrice: "74,900",
            beforePrice: "79,900",
            discountPercent: "6%",
            colorChip: [
                {hexCode: "#D9D2B0"},
                {hexCode: "#003989"},
            ],
            review: "1,522",
        },
        {
            id:"B04",
            title: "브레드걸 그래픽 반팔티_SPRPD37G10",
            img: "/img/weeklyBest/weeklyBestImg4.jpg",
            url: "#",
            nowPrice: "9,900",
            beforePrice: "19,900",
            discountPercent: "50%",
            colorChip: [
                {hexCode: "#FFFFFF"},
                {hexCode: "#000000"},
                {hexCode: "#F7F8CF"},
                {hexCode: "#C7A1CC"},
                {hexCode: "#DBD9D9"},
            ],  
            review: "1,522",
        },
        {
            id:"B05",
            title: "[울블렌드] 벨티드 발마칸 코트_SPJWD4VW01",
            img: "/img/weeklyBest/weeklyBestImg5.jpg",
            url: "#",
            nowPrice: "109,900",
            beforePrice: "129,900",
            discountPercent: "16%",
            colorChip: [
                {hexCode: "#B8BAB9"},
                {hexCode: "#000000"},
                {hexCode: "#EECF96"},
                {hexCode: "#B77F4F"},
            ],  
            review: "34",
        },
        {
            id:"B06",
            title: "후드 숏 더플 코트(SPJWD4TG01 RE)_SPJWE11G91",
            img: "/img/weeklyBest/weeklyBestImg6.jpg",
            url: "#",
            nowPrice: "99,900",
            beforePrice: "",
            discountPercent: "",
            colorChip: [
                {hexCode: "#B8BAB9"},
                {hexCode: "#03175E"},
            ],  
            review: "42",
        },
        {
            id:"B07",
            title: "[울블렌드] 크롭 R넥 스웨터_G,W_SPKWD4TU13",
            img: "/img/weeklyBest/weeklyBestImg7.jpg",
            url: "#",
            nowPrice: "19,900",
            beforePrice: "35,900",
            discountPercent: "45%",
            colorChip: [
                {hexCode: "#FCDEF4"},
                {hexCode: "#A8D2E8"},
                {hexCode: "#F7F8CF"},
                {hexCode: "#C7A1CC"},
            ],  
            review: "19",
        },
        {
            id:"B08",
            title: "퍼배색 무스탕_SPJLD4VW03",
            img: "/img/weeklyBest/weeklyBestImg8.jpg",
            url: "#",
            nowPrice: "99,900",
            beforePrice: "",
            discountPercent: "",
            colorChip: [
                {hexCode: "#000000"},
                {hexCode: "#F7F8CF"},
                {hexCode: "#8D5C33"},
            ],  
            review: "50",
        },
        {
            id:"N01",
            title: "[울블렌드] 헤링본 발마칸 코트_SPJWD4VM04",
            img: "/img/newProduct/newProductImg1.jpg",
            url: "#",
            nowPrice: "139,000",
            beforePrice: "159,000",
            discountPercent: "13%",
            colorChip: [
                {hexCode: "#6A4628"},
                {hexCode: "#BCBBBB"},
            ],  
            review: "3",
        },
        {
            id:"N02",
            title: "(QR) 날개사 볼레로 가디건_SPCKD4VG94",
            img: "/img/newProduct/newProductImg2.jpg",
            url: "#",
            nowPrice: "39,900",
            beforePrice: "",
            discountPercent: "",
            colorChip: [
                {hexCode: "#E36C9D"},
                {hexCode: "#D9D2B0"},
                {hexCode: "#8D5C33"},
            ],  
            review: "0",
        },
        {
            id:"N03",
            title: "(QR) 카라 V넥 케이블 스웨터_SPKWD4TW88",
            img: "/img/newProduct/newProductImg3.jpg",
            url: "#",
            nowPrice: "49,900",
            beforePrice: "",
            discountPercent: "",
            colorChip: [
                {hexCode: "#B8BAB9"},
                {hexCode: "#6D000A"},
                {hexCode: "#FFFEF7"},
            ],  
            review: "0",
        },
        {
            id:"N04",
            title: "(QR) 헤어리 볼륨 니트_SPKWD4VW99",
            img: "/img/newProduct/newProductImg4.jpg",
            url: "#",
            nowPrice: "39,900",
            beforePrice: "",
            discountPercent: "",
            colorChip: [
                {hexCode: "#EECF96"},
                {hexCode: "#A8D2E8"},
                {hexCode: "#595758"},
            ],  
            review: "5",
        },
    ],
    footer:{
        footerInfo:[
            {text: "상담시간 : 오전 10시~오후 5시(토요일, 공휴일 휴무)"},
            {text: "email : spao@eland.co.kr(단체주문 문의)"},
            {text: "email : spao_mkt@eland.co.kr(마케팅 협찬 문의)"},
        ],
        subInfo: {
            item:[
                {text:"(주)이랜드월드패션사업부"},
                {text:"사업자등록번호 : 113-85-19030 [사업자정보확인]"},
                {text:"통신판매업 신고번호 : 제 2005-01053 호"},
                {text:"대표이사 : 최운식"},
                {text:"서울특별시 금천구 가산디지털1로 159 (가산동) 이랜드가산동사옥"},
                {text:"개인정보 보호책임자 : 최운식"},
            ],
            msg: "사옥 주소로 상품을 발송하시면 교환ㆍ환불이 불가하므로, 교환ㆍ환불은 사이트 내에서 신청해주시기 바랍니다.",
        },
        footerMenu: [
            {menu: "브랜드소개"},
            {menu: "개인정보 처리방침"},
            {menu: "공지사항"},
            {menu: "오프라인 매장안내"},
            {menu: "약관안내"},
            {menu: "회원헤택"},
            {menu: "윤리경영"},
            {menu: "채정정보 및 인사제도"},
            {menu: "자주묻는질문 FAQ"},
        ]
    }
}

export default dataset;