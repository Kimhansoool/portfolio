const dataset = {
    header: [
        {
            id: "01",
            title: "할인상품",
            url: "#",
            childType: 'A',
            leftchildren:[],
            children: [],
            childBanners: []
        },
        {
            id: "02",
            title: "베스트",
            url: "#",
            childType: 'A',
            leftchildren:[],
            children: [],
            childBanners: []
        },
        {
            id: "03",
            title: "우먼",
            url: "#",
            childType: 'B',
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
            childType: 'B',
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
            childType: 'B',
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
            childType: 'B',
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
            childType: 'B',
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
    content:{},
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