const products = [
    {
        id: "1",
        name: "Giày Nike Air Force",
        image: "./assets/img/product/image1.jpg",
        page: 1,
        priceOld: "1.900.000",
        priceNew: "1.000.000",
        percent: "48%",
        sold: "99",
        idsort: "sort0",
        idsize: "size0",
        idprice: "min1",
        idtrademark: "trademark1"
    },
    {
        id: "2",
        name: "Adidas Grand Court",
        image: "./assets/img/product/image2.jpg",
        page: 1,
        priceOld: "1.100.000",
        priceNew: "850.000",
        percent: "22%",
        sold: "99",
        idsort: "sort0",
        idsize: "size0",
        idprice: "min0",
        idtrademark: "trademark0"
    },
    {
        id: "3",
        name: "Giày Superstar",
        image: "./assets/img/product/image3.jpg",
        page: 1,
        priceOld: "2.000.000",
        priceNew: "1.200.000",
        percent: "40%",
        sold: "80",
        idsort: "sort0",
        idsize: "size0",
        idprice: "min1",
        idtrademark: "trademark0"
    },
    {
        id: "4",
        name: "Giày Forum Low",
        image: "./assets/img/product/image4.jpg",
        page: 1,
        priceOld: "2.500.000",
        priceNew: "2.000.000",
        percent: "20%",
        sold: "80",
        idsort: "sort0",
        idsize: "size0",
        idprice: "min2",
        idtrademark: "trademark0"
    },
    {
        id: "5",
        name: "Nike Mercurial Air",
        image: "./assets/img/product/image5.jpg",
        page: 1,
        priceOld: "3.600.000",
        priceNew: "2.520.000",
        percent: "30%",
        sold: "80",
        idsort: "sort0",
        idsize: "size0",
        idprice: "min2",
        idtrademark: "trademark1"
    },
    {
        id: "6",
        name: "Stan mith",
        image: "./assets/img/product/image6.jpg",
        page: 1,
        priceOld: "2.700.000",
        priceNew: "1.900.000",
        percent: "30%",
        sold: "80",
        idsort: "sort0",
        idsize: "size1",
        idprice: "min1",
        idtrademark: "trademark0"
    },
    {
        id: "7",
        name: "Puma Suede Mayu",
        image: "./assets/img/product/image7.jpg",
        page: 1,
        priceOld: "2.999.000",
        priceNew: "2.590.000",
        percent: "13%",
        sold: "80",
        idsort: "sort0",
        idsize: "size0",
        idprice: "min2",
        idtrademark: "trademark2"
    },
    {
        id: "8",
        name: "Puma Future",
        image: "./assets/img/product/image8.jpg",
        page: 1,
        priceOld: "1.399.000",
        priceNew: "999.000",
        percent: "29%",
        sold: "80",
        idsort: "sort1",
        idsize: "size0",
        idprice: "min0",
        idtrademark: "trademark2"
    },
    {
        id: "9",
        name: "Nike Air Zoom Pegasus",
        image: "./assets/img/product/image9.jpg",
        page: 1,
        priceOld: "4.000.000",
        priceNew: "3.500.000",
        percent: "13%",
        sold: "80",
        idsort: "sort1",
        idsize: "size0",
        idprice: "min3",
        idtrademark: "trademark1"
    },
    {
        id: "10",
        name: "Hoodie Puma Playbook",
        image: "./assets/img/product/image10.jpg",
        page: 2,
        priceOld: "2.490.000",
        priceNew: "2.200.000",
        percent: "11%",
        sold: "80",
        idsort: "sort1",
        idsize: "size1",
        idprice: "min2",
        idtrademark: "trademark2"
    },
    {
        id: "11",
        name: "Áo Puma Pivot Cut-Off",
        image: "./assets/img/product/image11.jpg",
        page: 2,
        priceOld: "1.790.000",
        priceNew: "1.200.000",
        percent: "32%",
        sold: "80",
        idsort: "sort1",
        idsize: "size1",
        idprice: "min1",
        idtrademark: "trademark2"
    },
    {
        id: "12",
        name: "LEGGING OWN THE RUN",
        image: "./assets/img/product/image12.jpg",
        page: 2,
        priceOld: "1.400.000",
        priceNew: "900.000",
        percent: "35%",
        sold: "80",
        idsort: "sort1",
        idsize: "size1",
        idprice: "min0",
        idtrademark: "trademark0"
    },
    {
        id: "13",
        name: "Quần nike Ns pant",
        image: "./assets/img/product/image13.jpg",
        page: 2,
        priceOld: "9500.000",
        priceNew: "700.000",
        percent: "26%",
        sold: "80",
        idsort: "sort1",
        idsize: "size1",
        idprice: "min0",
        idtrademark: "trademark1"
    },
    {
        id: "14",
        name: "NIKE AS m",
        image: "./assets/img/product/image14.jpg",
        page: 2,
        priceOld: "1.900.000",
        priceNew: "1.500.000",
        percent: "20%",
        sold: "80",
        idsort: "sort1",
        idsize: "size1",
        idprice: "min1",
        idtrademark: "trademark1"
    },
    {
        id: "15",
        name: "Nike Waffle One",
        image: "./assets/img/product/image15.jpg",
        page: 2,
        priceOld: "2.000.000",
        priceNew: "1.500.000",
        percent: "25%",
        sold: "80",
        idsort: "sort2",
        idsize: "size1",
        idprice: "min1",
        idtrademark: "trademark1"
    },
    {
        id: "16",
        name: "Puma individualFinal",
        image: "./assets/img/product/image16.jpg",
        page: 2,
        priceOld: "900.000",
        priceNew: "570.000",
        percent: "36%",
        sold: "80",
        idsort: "sort2",
        idsize: "size1",
        idprice: "min0",
        idtrademark: "trademark2"
    },
    {
        id: "17",
        name: "Nike Renew Run 3",
        image: "./assets/img/product/image16.jpg",
        page: 2,
        priceOld: "2.499.000",
        priceNew: "1.999.000",
        percent: "20%",
        sold: "80",
        idsort: "sort2",
        idsize: "size1",
        idprice: "min1",
        idtrademark: "trademark1"
    },
    {
        id: "18",
        name: "Giày Astir",
        image: "./assets/img/product/image8.jpg",
        page: 2,
        priceOld: "2.800.000",
        priceNew: "1.800.000",
        percent: "35%",
        sold: "80",
        idsort: "sort2",
        idsize: "size1",
        idprice: "min1",
        idtrademark: "trademark0"
    },
    {
        id: "19",
        name: "Desporte futsal shoes",
        image: "./assets/img/product/image19.jpg",
        page: 3,
        priceOld: "1.550.000",
        priceNew: "1.000.000",
        percent: "35%",
        sold: "80",
        idsort: "sort2",
        idsize: "size2",
        idprice: "min1",
        idtrademark: "trademark3"
    },
    {
        id: "20",
        name: "Campinas JTF PRO1",
        image: "./assets/img/product/image20.jpg",
        page: 3,
        priceOld: "1.000.000",
        priceNew: "800.000",
        percent: "20%",
        sold: "80",
        idsort: "sort2",
        idsize: "size2",
        idprice: "min0",
        idtrademark: "trademark3"
    },
    {
        id: "21",
        name: "Shirt",
        image: "./assets/img/product/image21.jpg",
        page: 3,
        priceOld: "800.000",
        priceNew: "500.000",
        percent: "37%",
        sold: "80",
        idsort: "sort2",
        idsize: "size2",
        idprice: "min0",
        idtrademark: "trademark3"
    },
    {
        id: "22",
        name: "X MUNICH CONTINENTAL",
        image: "./assets/img/product/image22.jpg",
        page: 3,
        priceOld: "2.950.000",
        priceNew: "2.500.000",
        percent: "15%",
        sold: "80",
        idsort: "sort3",
        idsize: "size2",
        idprice: "min2",
        idtrademark: "trademark4"
    },
    {
        id: "23",
        name: "Giày NMD_r1",
        image: "./assets/img/product/image23.jpg",
        page: 3,
        priceOld: "3.600.000",
        priceNew: "3.399.000",
        percent: "5%",
        sold: "80",
        idsort: "sort3",
        idsize: "size2",
        idprice: "min3",
        idtrademark: "trademark0"
    },
    {
        id: "24",
        name: "retropy f2",
        image: "./assets/img/product/image24.jpg",
        page: 3,
        priceOld: "2.600.000",
        priceNew: "2.299.000",
        percent: "11%",
        sold: "80",
        idsort: "sort3",
        idsize: "size2",
        idprice: "min2",
        idtrademark: "trademark0"
    },
    {
        id: "25",
        name: "Alphabounce slides",
        image: "./assets/img/product/image25.jpg",
        page: 3,
        priceOld: "1.250.000",
        priceNew: "1.000.000",
        percent: "20%",
        sold: "80",
        idsort: "sort3",
        idsize: "size2",
        idprice: "min1",
        idtrademark: "trademark0"
    },
    {
        id: "26",
        name: "Nike air max fliyknit",
        image: "./assets/img/product/image26.jpg",
        page: 3,
        priceOld: "4.990.000",
        priceNew: "4.590.000",
        percent: "8%",
        sold: "80",
        idsort: "sort3",
        idsize: "size2",
        idprice: "min4",
        idtrademark: "trademark1"
    },
    {
        id: "27",
        name: "ĐỒ GYMádasdasd",
        image: "./assets/img/product/image27.jpg",
        page: 3,
        priceOld: "2.999.000",
        priceNew: "1.590.000",
        percent: "46%",
        sold: "80",
        idsort: "sort3",
        idsize: "size2",
        idprice: "min1",
        idtrademark: "trademark1"
    },
    {
        id: "28",
        name: "Puma Rebound LayUp",
        image: "./assets/img/product/image28.jpg",
        page: 4,
        priceOld: "1.500.000",
        priceNew: "1.335.000",
        percent: "11%",
        sold: "80",
        idsort: "sort3",
        idsize: "size3",
        idprice: "min1",
        idtrademark: "trademark2"
    },
    {
        id: "29",
        name: "Dép unisex Puma",
        image: "./assets/img/product/image29.jpg",
        page: 4,
        priceOld: "180.000",
        priceNew: "137.000",
        percent: "24%",
        sold: "80",
        idsort: "sort4",
        idsize: "size3",
        idprice: "min0",
        idtrademark: "trademark2"
    },
    {
        id: "30",
        name: "Puma Enzo Heather",
        image: "./assets/img/product/image30.jpg",
        page: 4,
        priceOld: "750.000",
        priceNew: "500.000",
        percent: "33%",
        sold: "80",
        idsort: "sort4",
        idsize: "size3",
        idprice: "min0",
        idtrademark: "trademark2"
    },
    {
        id: "31",
        name: "Giày Thể Thao",
        image: "./assets/img/product/image31.jpg",
        page: 4,
        priceOld: "330.000",
        priceNew: "270.000",
        percent: "18%",
        sold: "80",
        idsort: "sort4",
        idsize: "size3",
        idprice: "min0",
        idtrademark: "trademark2"
    },
    {
        id: "32",
        name: "X-MUNICH PRISMA",
        image: "./assets/img/product/image32.jpg",
        page: 4,
        priceOld: "1.990.000",
        priceNew: "1.650.000",
        percent: "17%",
        sold: "80",
        idsort: "sort4",
        idsize: "size3",
        idprice: "min1",
        idtrademark: "trademark4"
    },
    {
        id: "33",
        name: "DESPORTE SAO LUIS",
        image: "./assets/img/product/image33.jpg",
        page: 4,
        priceOld: "1.990.000",
        priceNew: "1.650.000",
        percent: "17%",
        sold: "80",
        idsort: "sort4",
        idsize: "size3",
        idprice: "min1",
        idtrademark: "trademark3"
    },
    {
        id: "34",
        name: "DESPORTE BOA VISTA",
        image: "./assets/img/product/image34.jpg",
        page: 4,
        priceOld: "2.990.000",
        priceNew: "2.490.000",
        percent: "16%",
        sold: "80",
        idsort: "sort4",
        idsize: "size3",
        idprice: "min2",
        idtrademark: "trademark3"
    },
    {
        id: "35",
        name: "TÚI GYM SACK",
        image: "./assets/img/product/image35.jpg",
        page: 4,
        priceOld: "350.000",
        priceNew: "300.000",
        percent: "15%",
        sold: "80",
        idsort: "sort4",
        idsize: "size3",
        idprice: "min0",
        idtrademark: "trademark3"
    },
    {
        id: "36",
        name: "DESPORTE TESSA LIGHT",
        image: "./assets/img/product/image36.jpg",
        page: 4,
        priceOld: "2.990.000",
        priceNew: "2.550.000",
        percent: "20%",
        sold: "80",
        idsort: "sort5",
        idsize: "size3",
        idprice: "min2",
        idtrademark: "trademark3"
    },
    {
        id: "37",
        name: "XMUNICH CONTINENTAL",
        image: "./assets/img/product/image37.jpg",
        page: 5,
        priceOld: "1.990.000",
        priceNew: "1.650.000",
        percent: "18%",
        sold: "80",
        idsort: "sort5",
        idsize: "size4",
        idprice: "min1",
        idtrademark: "trademark4"
    },
    {
        id: "38",
        name: "Áo Grand Sport",
        image: "./assets/img/product/image38.jpg",
        page: 5,
        priceOld: "500.000",
        priceNew: "380.000",
        percent: "24%",
        sold: "80",
        idsort: "sort5",
        idsize: "size4",
        idprice: "min0",
        idtrademark: "trademark5"
    },
    {
        id: "39",
        name: "Grand Sport Xanh",
        image: "./assets/img/product/image39.jpg",
        page: 5,
        priceOld: "625.000",
        priceNew: "440.000",
        percent: "29%",
        sold: "80",
        idsort: "sort5",
        idsize: "size4",
        idprice: "min0",
        idtrademark: "trademark5"
    },
    {
        id: "40",
        name: "Grand Sport Ngọc",
        image: "./assets/img/product/image40.jpg",
        page: 5,
        priceOld: "625.000",
        priceNew: "440.000",
        percent: "29%",
        sold: "80",
        idsort: "sort5",
        idsize: "size4",
        idprice: "min0",
        idtrademark: "trademark5"
    },
    {
        id: "41",
        name: "Grand Sport Đỏ",
        image: "./assets/img/product/image41.jpg",
        page: 5,
        priceOld: "625.000",
        priceNew: "440.000",
        percent: "29%",
        sold: "80",
        idsort: "sort6",
        idsize: "size4",
        idprice: "min0",
        idtrademark: "trademark5"
    },
    {
        id: "42",
        name: "Grand Sport Trắng",
        image: "./assets/img/product/image42.jpg",
        page: 5,
        priceOld: "625.000",
        priceNew: "440.000",
        percent: "29%",
        sold: "80",
        idsort: "sort6",
        idsize: "size4",
        idprice: "min0",
        idtrademark: "trademark5"
    },
    {
        id: "43",
        name: "KAMITO",
        image: "./assets/img/product/image43.jpg",
        page: 5,
        priceOld: "625.000",
        priceNew: "440.000",
        percent: "29%",
        sold: "80",
        idsort: "sort6",
        idsize: "size4",
        idprice: "min0",
        idtrademark: "trademark5"
    },
    {
        id: "44",
        name: "MUNICH PRISMA",
        image: "./assets/img/product/image44.jpg",
        page: 5,
        priceOld: "1.990.000",
        priceNew: "1.650.000",
        percent: "18%",
        sold: "80",
        idsort: "sort6",
        idsize: "size4",
        idprice: "min1",
        idtrademark: "trademark4"
    },
    {
        id: "45",
        name: "X-Munich",
        image: "./assets/img/product/image45.jpg",
        page: 5,
        priceOld: "2.990.000",
        priceNew: "2.750.000",
        percent: "9%",
        sold: "80",
        idsort: "sort6",
        idsize: "size4",
        idprice: "min2",
        idtrademark: "trademark4"
    }
]
const apiNews = [
    {
        id: 1,
        title: 'Tin tức về giày puma',
        text: 'Trong phạm vi bài viết ngày hôm nay, hãy cùng Thanh Hùng Futsal khám phá mẫu giày đá bóng độc nhất vô nhị được nhà Swoosh thửa riêng cho cậu bé vàng của xứ sở Lục Lăng nhé!',
        image: './assets/img/product/news1.jpg',
        page: 1,
    },
    {
        id: 2,
        title: 'Người sáng lập đế chế puma',
        text: 'PUMA ra mắt KING TOP DASSLER phiên bản giới hạn 20/11/2021 nhằm tôn vinh những di sản mà Rudolph Dassler, người sáng lập Puma để lại, mới đây hãng thể thao nước Đức đã cho ra đời phiên bản Puma King Top Dassler với chỉ giới hạn 100 đôi trên toàn thế giới. Đôi giày đá banh được thiết kế theo phong cách đơn giản, đúng với tinh thần của dòng sản phẩm Puma King. Upper là chất liệu da Kangaroo cao cấp với tone màu trắng chủ đạo lấy ý tưởng từ những bộ quần áo sạch sẽ mà cậu bé Dassler đã giặt thuê từ khi còn nhỏ, thông qua đó cũng xây dựng lên tinh thần kinh doanh và ý chí khởi nghiệp từ sớm của cậu.',
        image: './assets/img/product/news2.jpg',
        page: 1,
    },
    {
        id: 3,
        title: 'Thông tin bên lề Uero',
        text: 'Bóng đá đã trở lại", câu nói tưởng chừng bình thường nhưng lại vô cùng ý nghĩa trong thời điểm hiện tại, khi mà chúng ta đang phải sống chung với đại dịch Covid-19. Các sân vận động chật kín cổ động viên với các tràng vỗ tay, tiếng cổ vũ cũng là một hình ảnh đánh dấu chiến thắng của nhân loại trước Covid-19. Bên cạnh các trận đấu bóng đá đỉnh cao đang diễn ra khắp các sân cỏ trên toàn thế giới, thì các ông lớn như Nike, adidas hay Puma, v.v...',
        image: './assets/img/product/news3.jpg',
        page: 1,
    },
    {
        id: 4,
        title: 'GIÀY ĐÁ BÓNG “PASSION RED”',
        text: 'Hòa vào không khí cuồng nhiệt của mùa giải mới, Mizuno tung ra BST “Passion Red” với sự góp mặt của 2 dòng giày cao cấp: Mizuno Neo III β và Morelia II. Những đôi giày được khoác lên mình bộ cánh màu đỏ càng tăng thêm phần rực rỡ. Hãy cùng Sport9 tìm hiểu chi tiết về những đôi giày đá bóng Mizuno mới nhé!',
        image: './assets/img/product/news4.jpg',
        page: 1,
    },
    {
        id: 5,
        title: 'GIÀY ĐÁ BÓNG LUCENT PACK',
        text: 'Mở đầu cho mùa giảm mới 22/23 vào tuần mà Premier League khởi tranh,  Nike tung bộ sưu tập giày đá bóng đầu tiên cho mùa giải - Lucent Pack với sự xuất hiện của các silo: Phantom GT II, Tiempo Legend 9 và Air Zoom Superfly và Air Zoom Vapor.',
        image: './assets/img/product/news5.jpg',
        page: 1,
    },
    {
        id: 6,
        title: 'BÓNG ĐÁ MỚI SHADOWPORTAL',
        text: 'Sau sự ra mắt của bộ sưu tập giày đá bóng Game Data gần đây, adidas tiếp tục phát hành bộ sưu tập Shadowportal với màu đen làm chủ đạo. Tuy trái ngược hoàn toàn với Game Data nhưng BST lần này vẫn có những nét chấm phá khi bao gồm các màu từ X Speedportal, Predator Edge và Copa Sense.',
        image: './assets/img/product/news6.jpg',
        page: 1,
    },
    {
        id: 7,
        title: 'ADIDAS X SPEEDPORTAL',
        text: 'Sau thành công vang dội của adidas X Speedflow, dòng giày nhanh nhất và phù hợp với mọi vị trí của adidas, giờ đây adidas ra mắt thế hệ tiếp theo thậm chí còn nhanh hơn và cải tiến hơn thế hệ trước.',
        image: './assets/img/product/news7.jpg',
        page: 1,
    },
    {
        id: 8,
        title: 'GIÀY BÓNG ĐÁ ADIDAS GAME DATA',
        text: 'Dù đã xuất hiện trên sân cỏ một vài tuần trở lại đây, cuối cùng hôm nay bộ sưu tập Game Data của adidas cũng chính thức được ra mắt. Bộ sưu tập này khoác lên dòng giày Predator Edge và Copa Sense những màu sắc vô cùng tươi sáng, đặc biệt cùng với đó là sự xuất hiện hoàn toàn mới của X Speedportal.',
        image: './assets/img/product/news8.jpg',
        page: 1,
    },
    {
        id: 9,
        title: 'GIÀY BÓNG ĐÁ MORELIA NEO III SR4',
        text: 'Sau khi Sergio Ramos chính thức trở thành đại diện cho Mizuno vào tháng 2, thương hiệu thế giới này đã cho ra mắt mẫu giày dành riêng cho anh ấy. Đôi giày đá bóng Mizuno Morelia Neo III β ‘SR4’ không chỉ mang chữ ký của Sergio Ramos mà còn lấy cảm hứng từ chính những hình xăm của cầu thủ này.',
        image: './assets/img/product/news9.jpg',
        page: 1,
    },
    {
        id: 10,
        title: 'Tin tức về giày puma',
        text: 'Trong phạm vi bài viết ngày hôm nay, hãy cùng Thanh Hùng Futsal khám phá mẫu giày đá bóng độc nhất vô nhị được nhà Swoosh thửa riêng cho cậu bé vàng của xứ sở Lục Lăng nhé!',
        image: './assets/img/product/image10.jpg',
        page: 2,
    },
    {
        id: 11,
        title: 'Người sáng lập đế chế puma',
        text: 'PUMA ra mắt KING TOP DASSLER phiên bản giới hạn 20/11/2021 nhằm tôn vinh những di sản mà Rudolph Dassler, người sáng lập Puma để lại, mới đây hãng thể thao nước Đức đã cho ra đời phiên bản Puma King Top Dassler với chỉ giới hạn 100 đôi trên toàn thế giới. Đôi giày đá banh được thiết kế theo phong cách đơn giản, đúng với tinh thần của dòng sản phẩm Puma King. Upper là chất liệu da Kangaroo cao cấp với tone màu trắng chủ đạo lấy ý tưởng từ những bộ quần áo sạch sẽ mà cậu bé Dassler đã giặt thuê từ khi còn nhỏ, thông qua đó cũng xây dựng lên tinh thần kinh doanh và ý chí khởi nghiệp từ sớm của cậu.',
        image: './assets/img/product/image11.jpg',
        page: 2,
    },
    {
        id: 12,
        title: 'Thông tin bên lề Uero',
        text: 'Bóng đá đã trở lại", câu nói tưởng chừng bình thường nhưng lại vô cùng ý nghĩa trong thời điểm hiện tại, khi mà chúng ta đang phải sống chung với đại dịch Covid-19. Các sân vận động chật kín cổ động viên với các tràng vỗ tay, tiếng cổ vũ cũng là một hình ảnh đánh dấu chiến thắng của nhân loại trước Covid-19. Bên cạnh các trận đấu bóng đá đỉnh cao đang diễn ra khắp các sân cỏ trên toàn thế giới, thì các ông lớn như Nike, adidas hay Puma, v.v...',
        image: './assets/img/product/image12.jpg',
        page: 2,
    },
    {
        id: 12,
        title: 'GIÀY ĐÁ BÓNG “PASSION RED”',
        text: 'Hòa vào không khí cuồng nhiệt của mùa giải mới, Mizuno tung ra BST “Passion Red” với sự góp mặt của 2 dòng giày cao cấp: Mizuno Neo III β và Morelia II. Những đôi giày được khoác lên mình bộ cánh màu đỏ càng tăng thêm phần rực rỡ. Hãy cùng Sport9 tìm hiểu chi tiết về những đôi giày đá bóng Mizuno mới nhé!',
        image: './assets/img/product/image13.jpg',
        page: 2,
    },
    {
        id: 14,
        title: 'GIÀY ĐÁ BÓNG LUCENT PACK',
        text: 'Mở đầu cho mùa giảm mới 22/23 vào tuần mà Premier League khởi tranh,  Nike tung bộ sưu tập giày đá bóng đầu tiên cho mùa giải - Lucent Pack với sự xuất hiện của các silo: Phantom GT II, Tiempo Legend 9 và Air Zoom Superfly và Air Zoom Vapor.',
        image: './assets/img/product/image14.jpg',
        page: 2,
    },
    {
        id: 15,
        title: 'BÓNG ĐÁ MỚI SHADOWPORTAL',
        text: 'Sau sự ra mắt của bộ sưu tập giày đá bóng Game Data gần đây, adidas tiếp tục phát hành bộ sưu tập Shadowportal với màu đen làm chủ đạo. Tuy trái ngược hoàn toàn với Game Data nhưng BST lần này vẫn có những nét chấm phá khi bao gồm các màu từ X Speedportal, Predator Edge và Copa Sense.',
        image: './assets/img/product/image1.jpg',
        page: 2,
    },
    {
        id: 16,
        title: 'ADIDAS X SPEEDPORTAL',
        text: 'Sau thành công vang dội của adidas X Speedflow, dòng giày nhanh nhất và phù hợp với mọi vị trí của adidas, giờ đây adidas ra mắt thế hệ tiếp theo thậm chí còn nhanh hơn và cải tiến hơn thế hệ trước.',
        image: './assets/img/product/image2.jpg',
        page: 2,
    },
    {
        id: 17,
        title: 'GIÀY BÓNG ĐÁ ADIDAS GAME DATA',
        text: 'Dù đã xuất hiện trên sân cỏ một vài tuần trở lại đây, cuối cùng hôm nay bộ sưu tập Game Data của adidas cũng chính thức được ra mắt. Bộ sưu tập này khoác lên dòng giày Predator Edge và Copa Sense những màu sắc vô cùng tươi sáng, đặc biệt cùng với đó là sự xuất hiện hoàn toàn mới của X Speedportal.',
        image: './assets/img/product/image3.jpg',
        page: 2,
    },
    {
        id: 18,
        title: 'GIÀY BÓNG ĐÁ MORELIA NEO III SR4',
        text: 'Sau khi Sergio Ramos chính thức trở thành đại diện cho Mizuno vào tháng 2, thương hiệu thế giới này đã cho ra mắt mẫu giày dành riêng cho anh ấy. Đôi giày đá bóng Mizuno Morelia Neo III β ‘SR4’ không chỉ mang chữ ký của Sergio Ramos mà còn lấy cảm hứng từ chính những hình xăm của cầu thủ này.',
        image: './assets/img/product/image45.jpg',
        page: 2,
    },
    {
        id: 19,
        title: 'Tin tức về giày puma',
        text: 'Trong phạm vi bài viết ngày hôm nay, hãy cùng Thanh Hùng Futsal khám phá mẫu giày đá bóng độc nhất vô nhị được nhà Swoosh thửa riêng cho cậu bé vàng của xứ sở Lục Lăng nhé!',
        image: './assets/img/product/image42.jpg',
        page: 3,
    },
    {
        id: 20,
        title: 'Người sáng lập đế chế puma',
        text: 'PUMA ra mắt KING TOP DASSLER phiên bản giới hạn 20/11/2021 nhằm tôn vinh những di sản mà Rudolph Dassler, người sáng lập Puma để lại, mới đây hãng thể thao nước Đức đã cho ra đời phiên bản Puma King Top Dassler với chỉ giới hạn 100 đôi trên toàn thế giới. Đôi giày đá banh được thiết kế theo phong cách đơn giản, đúng với tinh thần của dòng sản phẩm Puma King. Upper là chất liệu da Kangaroo cao cấp với tone màu trắng chủ đạo lấy ý tưởng từ những bộ quần áo sạch sẽ mà cậu bé Dassler đã giặt thuê từ khi còn nhỏ, thông qua đó cũng xây dựng lên tinh thần kinh doanh và ý chí khởi nghiệp từ sớm của cậu.',
        image: './assets/img/product/image40.jpg',
        page: 3,
    },
    {
        id: 21,
        title: 'Thông tin bên lề Uero',
        text: 'Bóng đá đã trở lại", câu nói tưởng chừng bình thường nhưng lại vô cùng ý nghĩa trong thời điểm hiện tại, khi mà chúng ta đang phải sống chung với đại dịch Covid-19. Các sân vận động chật kín cổ động viên với các tràng vỗ tay, tiếng cổ vũ cũng là một hình ảnh đánh dấu chiến thắng của nhân loại trước Covid-19. Bên cạnh các trận đấu bóng đá đỉnh cao đang diễn ra khắp các sân cỏ trên toàn thế giới, thì các ông lớn như Nike, adidas hay Puma, v.v...',
        image: './assets/img/product/image39.jpg',
        page: 3,
    },
    {
        id: 22,
        title: 'GIÀY ĐÁ BÓNG “PASSION RED”',
        text: 'Hòa vào không khí cuồng nhiệt của mùa giải mới, Mizuno tung ra BST “Passion Red” với sự góp mặt của 2 dòng giày cao cấp: Mizuno Neo III β và Morelia II. Những đôi giày được khoác lên mình bộ cánh màu đỏ càng tăng thêm phần rực rỡ. Hãy cùng Sport9 tìm hiểu chi tiết về những đôi giày đá bóng Mizuno mới nhé!',
        image: './assets/img/product/image33.jpg',
        page: 3,
    },
    {
        id: 23,
        title: 'GIÀY ĐÁ BÓNG LUCENT PACK',
        text: 'Mở đầu cho mùa giảm mới 22/23 vào tuần mà Premier League khởi tranh,  Nike tung bộ sưu tập giày đá bóng đầu tiên cho mùa giải - Lucent Pack với sự xuất hiện của các silo: Phantom GT II, Tiempo Legend 9 và Air Zoom Superfly và Air Zoom Vapor.',
        image: './assets/img/product/image34.jpg',
        page: 3,
    },
    {
        id: 24,
        title: 'BÓNG ĐÁ MỚI SHADOWPORTAL',
        text: 'Sau sự ra mắt của bộ sưu tập giày đá bóng Game Data gần đây, adidas tiếp tục phát hành bộ sưu tập Shadowportal với màu đen làm chủ đạo. Tuy trái ngược hoàn toàn với Game Data nhưng BST lần này vẫn có những nét chấm phá khi bao gồm các màu từ X Speedportal, Predator Edge và Copa Sense.',
        image: './assets/img/product/image37.jpg',
        page: 3,
    },
    {
        id: 25,
        title: 'ADIDAS X SPEEDPORTAL',
        text: 'Sau thành công vang dội của adidas X Speedflow, dòng giày nhanh nhất và phù hợp với mọi vị trí của adidas, giờ đây adidas ra mắt thế hệ tiếp theo thậm chí còn nhanh hơn và cải tiến hơn thế hệ trước.',
        image: './assets/img/product/image36.jpg',
        page: 3,
    },
    {
        id: 26,
        title: 'GIÀY BÓNG ĐÁ ADIDAS GAME DATA',
        text: 'Dù đã xuất hiện trên sân cỏ một vài tuần trở lại đây, cuối cùng hôm nay bộ sưu tập Game Data của adidas cũng chính thức được ra mắt. Bộ sưu tập này khoác lên dòng giày Predator Edge và Copa Sense những màu sắc vô cùng tươi sáng, đặc biệt cùng với đó là sự xuất hiện hoàn toàn mới của X Speedportal.',
        image: './assets/img/product/image29.jpg',
        page: 3,
    },
    {
        id: 27,
        title: 'GIÀY BÓNG ĐÁ MORELIA NEO III SR4',
        text: 'Sau khi Sergio Ramos chính thức trở thành đại diện cho Mizuno vào tháng 2, thương hiệu thế giới này đã cho ra mắt mẫu giày dành riêng cho anh ấy. Đôi giày đá bóng Mizuno Morelia Neo III β ‘SR4’ không chỉ mang chữ ký của Sergio Ramos mà còn lấy cảm hứng từ chính những hình xăm của cầu thủ này.',
        image: './assets/img/product/image35.jpg',
        page: 3,
    },
    {
        id: 28,
        title: 'Tin tức về giày puma',
        text: 'Trong phạm vi bài viết ngày hôm nay, hãy cùng Thanh Hùng Futsal khám phá mẫu giày đá bóng độc nhất vô nhị được nhà Swoosh thửa riêng cho cậu bé vàng của xứ sở Lục Lăng nhé!',
        image: './assets/img/product/image25.jpg',
        page: 4,
    },
    {
        id: 29,
        title: 'Người sáng lập đế chế puma',
        text: 'PUMA ra mắt KING TOP DASSLER phiên bản giới hạn 20/11/2021 nhằm tôn vinh những di sản mà Rudolph Dassler, người sáng lập Puma để lại, mới đây hãng thể thao nước Đức đã cho ra đời phiên bản Puma King Top Dassler với chỉ giới hạn 100 đôi trên toàn thế giới. Đôi giày đá banh được thiết kế theo phong cách đơn giản, đúng với tinh thần của dòng sản phẩm Puma King. Upper là chất liệu da Kangaroo cao cấp với tone màu trắng chủ đạo lấy ý tưởng từ những bộ quần áo sạch sẽ mà cậu bé Dassler đã giặt thuê từ khi còn nhỏ, thông qua đó cũng xây dựng lên tinh thần kinh doanh và ý chí khởi nghiệp từ sớm của cậu.',
        image: './assets/img/product/image22.jpg',
        page: 4,
    },
    {
        id: 30,
        title: 'Thông tin bên lề Uero',
        text: 'Bóng đá đã trở lại", câu nói tưởng chừng bình thường nhưng lại vô cùng ý nghĩa trong thời điểm hiện tại, khi mà chúng ta đang phải sống chung với đại dịch Covid-19. Các sân vận động chật kín cổ động viên với các tràng vỗ tay, tiếng cổ vũ cũng là một hình ảnh đánh dấu chiến thắng của nhân loại trước Covid-19. Bên cạnh các trận đấu bóng đá đỉnh cao đang diễn ra khắp các sân cỏ trên toàn thế giới, thì các ông lớn như Nike, adidas hay Puma, v.v...',
        image: './assets/img/product/image26.jpg',
        page: 4,
    },
    {
        id: 31,
        title: 'GIÀY ĐÁ BÓNG “PASSION RED”',
        text: 'Hòa vào không khí cuồng nhiệt của mùa giải mới, Mizuno tung ra BST “Passion Red” với sự góp mặt của 2 dòng giày cao cấp: Mizuno Neo III β và Morelia II. Những đôi giày được khoác lên mình bộ cánh màu đỏ càng tăng thêm phần rực rỡ. Hãy cùng Sport9 tìm hiểu chi tiết về những đôi giày đá bóng Mizuno mới nhé!',
        image: './assets/img/product/image24.jpg',
        page: 4,
    },
    {
        id: 32,
        title: 'GIÀY ĐÁ BÓNG LUCENT PACK',
        text: 'Mở đầu cho mùa giảm mới 22/23 vào tuần mà Premier League khởi tranh,  Nike tung bộ sưu tập giày đá bóng đầu tiên cho mùa giải - Lucent Pack với sự xuất hiện của các silo: Phantom GT II, Tiempo Legend 9 và Air Zoom Superfly và Air Zoom Vapor.',
        image: './assets/img/product/image25.jpg',
        page: 4,
    },
    {
        id: 33,
        title: 'BÓNG ĐÁ MỚI SHADOWPORTAL',
        text: 'Sau sự ra mắt của bộ sưu tập giày đá bóng Game Data gần đây, adidas tiếp tục phát hành bộ sưu tập Shadowportal với màu đen làm chủ đạo. Tuy trái ngược hoàn toàn với Game Data nhưng BST lần này vẫn có những nét chấm phá khi bao gồm các màu từ X Speedportal, Predator Edge và Copa Sense.',
        image: './assets/img/product/news4.jpg',
        page: 4,
    },
    {
        id: 34,
        title: 'ADIDAS X SPEEDPORTAL',
        text: 'Sau thành công vang dội của adidas X Speedflow, dòng giày nhanh nhất và phù hợp với mọi vị trí của adidas, giờ đây adidas ra mắt thế hệ tiếp theo thậm chí còn nhanh hơn và cải tiến hơn thế hệ trước.',
        image: './assets/img/product/news3.jpg',
        page: 4,
    },
    {
        id: 35,
        title: 'GIÀY BÓNG ĐÁ ADIDAS GAME DATA',
        text: 'Dù đã xuất hiện trên sân cỏ một vài tuần trở lại đây, cuối cùng hôm nay bộ sưu tập Game Data của adidas cũng chính thức được ra mắt. Bộ sưu tập này khoác lên dòng giày Predator Edge và Copa Sense những màu sắc vô cùng tươi sáng, đặc biệt cùng với đó là sự xuất hiện hoàn toàn mới của X Speedportal.',
        image: './assets/img/product/news2.jpg',
        page: 4,
    },
    {
        id: 36,
        title: 'GIÀY BÓNG ĐÁ MORELIA NEO III SR4',
        text: 'Sau khi Sergio Ramos chính thức trở thành đại diện cho Mizuno vào tháng 2, thương hiệu thế giới này đã cho ra mắt mẫu giày dành riêng cho anh ấy. Đôi giày đá bóng Mizuno Morelia Neo III β ‘SR4’ không chỉ mang chữ ký của Sergio Ramos mà còn lấy cảm hứng từ chính những hình xăm của cầu thủ này.',
        image: './assets/img/product/news1.jpg',
        page: 4,
    },
    {
        id: 37,
        title: 'Tin tức về giày puma',
        text: 'Trong phạm vi bài viết ngày hôm nay, hãy cùng Thanh Hùng Futsal khám phá mẫu giày đá bóng độc nhất vô nhị được nhà Swoosh thửa riêng cho cậu bé vàng của xứ sở Lục Lăng nhé!',
        image: './assets/img/product/news1.jpg',
        page: 5,
    },
    {
        id: 38,
        title: 'Người sáng lập đế chế puma',
        text: 'PUMA ra mắt KING TOP DASSLER phiên bản giới hạn 20/11/2021 nhằm tôn vinh những di sản mà Rudolph Dassler, người sáng lập Puma để lại, mới đây hãng thể thao nước Đức đã cho ra đời phiên bản Puma King Top Dassler với chỉ giới hạn 100 đôi trên toàn thế giới. Đôi giày đá banh được thiết kế theo phong cách đơn giản, đúng với tinh thần của dòng sản phẩm Puma King. Upper là chất liệu da Kangaroo cao cấp với tone màu trắng chủ đạo lấy ý tưởng từ những bộ quần áo sạch sẽ mà cậu bé Dassler đã giặt thuê từ khi còn nhỏ, thông qua đó cũng xây dựng lên tinh thần kinh doanh và ý chí khởi nghiệp từ sớm của cậu.',
        image: './assets/img/product/news2.jpg',
        page: 5,
    },
    {
        id: 39,
        title: 'Thông tin bên lề Uero',
        text: 'Bóng đá đã trở lại", câu nói tưởng chừng bình thường nhưng lại vô cùng ý nghĩa trong thời điểm hiện tại, khi mà chúng ta đang phải sống chung với đại dịch Covid-19. Các sân vận động chật kín cổ động viên với các tràng vỗ tay, tiếng cổ vũ cũng là một hình ảnh đánh dấu chiến thắng của nhân loại trước Covid-19. Bên cạnh các trận đấu bóng đá đỉnh cao đang diễn ra khắp các sân cỏ trên toàn thế giới, thì các ông lớn như Nike, adidas hay Puma, v.v...',
        image: './assets/img/product/news3.jpg',
        page: 5,
    },
    {
        id: 40,
        title: 'GIÀY ĐÁ BÓNG “PASSION RED”',
        text: 'Hòa vào không khí cuồng nhiệt của mùa giải mới, Mizuno tung ra BST “Passion Red” với sự góp mặt của 2 dòng giày cao cấp: Mizuno Neo III β và Morelia II. Những đôi giày được khoác lên mình bộ cánh màu đỏ càng tăng thêm phần rực rỡ. Hãy cùng Sport9 tìm hiểu chi tiết về những đôi giày đá bóng Mizuno mới nhé!',
        image: './assets/img/product/news4.jpg',
        page: 5,
    },
    {
        id: 41,
        title: 'GIÀY ĐÁ BÓNG LUCENT PACK',
        text: 'Mở đầu cho mùa giảm mới 22/23 vào tuần mà Premier League khởi tranh,  Nike tung bộ sưu tập giày đá bóng đầu tiên cho mùa giải - Lucent Pack với sự xuất hiện của các silo: Phantom GT II, Tiempo Legend 9 và Air Zoom Superfly và Air Zoom Vapor.',
        image: './assets/img/product/news5.jpg',
        page: 5,
    },
    {
        id: 42,
        title: 'BÓNG ĐÁ MỚI SHADOWPORTAL',
        text: 'Sau sự ra mắt của bộ sưu tập giày đá bóng Game Data gần đây, adidas tiếp tục phát hành bộ sưu tập Shadowportal với màu đen làm chủ đạo. Tuy trái ngược hoàn toàn với Game Data nhưng BST lần này vẫn có những nét chấm phá khi bao gồm các màu từ X Speedportal, Predator Edge và Copa Sense.',
        image: './assets/img/product/news6.jpg',
        page: 5,
    },
    {
        id: 43,
        title: 'ADIDAS X SPEEDPORTAL',
        text: 'Sau thành công vang dội của adidas X Speedflow, dòng giày nhanh nhất và phù hợp với mọi vị trí của adidas, giờ đây adidas ra mắt thế hệ tiếp theo thậm chí còn nhanh hơn và cải tiến hơn thế hệ trước.',
        image: './assets/img/product/news7.jpg',
        page: 5,
    },
    {
        id: 44,
        title: 'GIÀY BÓNG ĐÁ ADIDAS GAME DATA',
        text: 'Dù đã xuất hiện trên sân cỏ một vài tuần trở lại đây, cuối cùng hôm nay bộ sưu tập Game Data của adidas cũng chính thức được ra mắt. Bộ sưu tập này khoác lên dòng giày Predator Edge và Copa Sense những màu sắc vô cùng tươi sáng, đặc biệt cùng với đó là sự xuất hiện hoàn toàn mới của X Speedportal.',
        image: './assets/img/product/news8.jpg',
        page: 5,
    },
    {
        id: 45,
        title: 'GIÀY BÓNG ĐÁ MORELIA NEO III SR4',
        text: 'Sau khi Sergio Ramos chính thức trở thành đại diện cho Mizuno vào tháng 2, thương hiệu thế giới này đã cho ra mắt mẫu giày dành riêng cho anh ấy. Đôi giày đá bóng Mizuno Morelia Neo III β ‘SR4’ không chỉ mang chữ ký của Sergio Ramos mà còn lấy cảm hứng từ chính những hình xăm của cầu thủ này.',
        image: './assets/img/product/news9.jpg',
        page: 5,
    }
]