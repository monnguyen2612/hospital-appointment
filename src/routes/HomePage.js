import React, { useState, useEffect } from "react";

import "./HomePage.css";

const HomePage = (props) => {
  return (
    <div
      style={{
        top: 0,
        position: "absolute",
        width: "100%",
      }}
    >
      <header>
        <div class="vung-bao">
          <div class="hang">
            <div class="cot-nho-7 cot-9">
              <button class="trinhdon-congtac">
                <span class="duong-ke"></span>
                <span class="duong-ke"></span>
                <span class="duong-ke"></span>
              </button>
              <a href="/" />
              <img
                class="bt-dautrang"
                src="/assets/icon/bookingcare-2020.svg"
                alt=""
              />
              <ul class="menu-dautrang">
                <li>
                  <a
                    href="/#chuyenkhoa"
                    onclick="amplitude.getInstance().logEvent('CLICK_TOPMENU_CHUYENKHOA');"
                    class="mo-cuaso"
                    dl-cuaso="chuyenkhoa"
                  >
                    Chuyên khoa
                    <span>Tìm bác sĩ theo chuyên khoa</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#cosoyte"
                    onclick="amplitude.getInstance().logEvent('CLICK_TOPMENU_COSOYTE');"
                    class="mo-cuaso"
                    dl-cuaso="cosoyte"
                  >
                    Cơ sở y tế
                    <span>Chọn bệnh viện phòng khám</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#bacsi"
                    onclick="amplitude.getInstance().logEvent('CLICK_TOPMENU_BACSI');"
                    class="mo-cuaso"
                    dl-cuaso="bacsi"
                  >
                    Bác sĩ
                    <span>Chọn bác sĩ giỏi</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#khamtongquat"
                    onclick="amplitude.getInstance().logEvent('CLICK_TOPMENU_GOIKHAM');"
                    class="mo-cuaso"
                    dl-cuaso="khamtongquat"
                  >
                    Gói khám
                    <span>Khám sức khỏe tổng quát</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="cot-nho-5 cot-3 chu-phai">
              <div class="hotro">
                <a href="/hop-tac">
                  <span class="chu">Hợp tác</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="timkiem-bg luoi-tai"
        style={{
          backgroundImage:
            "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-958682384-1552663649.jpg')",
        }}
      >
        <div class="timkiem">
          <div class="vung-bao">
            <h1>
              Nền tảng y tế <br />
              <b>chăm sóc sức khỏe toàn diện</b>
            </h1>
            <div class="timkiem-form  " id="timkiem_form">
              <div class="timkiem-tieude">
                <h2 class="d-sm-none">Tìm kiếm</h2>
                <button
                  type="button"
                  id="timkiem_dong"
                  class="nut-dong timkiem-dong"
                >
                  <span class="bt-g bt-g-xoa" aria-hidden="true"></span>
                </button>
              </div>
              <div class="timkiem-onhap">
                <i class="bt-g bt-g-tim"></i>
                <input
                  id="timkiem_chung"
                  type="search"
                  placeholder="Tìm lý do khám"
                />
              </div>
              <div id="timkiem_chung_ketqua" class="timkiem-ketqua">
                <h3>Chuyên khoa</h3>
                <a href="/co-xuong-khop-s1">
                  <h4>Cơ Xương Khớp</h4>
                </a>
                <a href="/than-kinh-s18">
                  <h4>Thần kinh</h4>
                </a>
                <a href="/tieu-hoa-s22">
                  <h4>Tiêu hóa</h4>
                </a>
                <a href="/tim-mach-s3">
                  <h4>Tim mạch</h4>
                </a>
                <a href="/tai-mui-hong-s4">
                  <h4>Tai Mũi Họng</h4>
                </a>
                <a href="/cot-song-s24">
                  <h4>Cột sống</h4>
                </a>
                <a href="/y-hoc-co-truyen-s39">
                  <h4>Y học Cổ truyền</h4>
                </a>
                <a href="/cham-cuu-s40">
                  <h4>Châm cứu</h4>
                </a>
                <a href="/san-phu-khoa-s19">
                  <h4>Sản Phụ khoa</h4>
                </a>
                <a href="/sieu-am-thai-s10">
                  <h4>Siêu âm thai</h4>
                </a>
                <a href="/nhi-khoa-s5">
                  <h4>Nhi khoa</h4>
                </a>
                <a href="/da-lieu-s11">
                  <h4>Da liễu</h4>
                </a>
                <a href="/benh-viem-gan-s28">
                  <h4>Bệnh Viêm gan</h4>
                </a>
                <a href="/suc-khoe-tam-than-s27">
                  <h4>Sức khỏe tâm thần</h4>
                </a>
                <a href="/di-ung-mien-dich-s36">
                  <h4>Dị ứng miễn dịch</h4>
                </a>
                <a href="/ho-hap-phoi-s43">
                  <h4>Hô hấp - Phổi</h4>
                </a>
                <a href="/nam-hoc-s26">
                  <h4>Nam học</h4>
                </a>
                <a href="/chuyen-khoa-mat-s29">
                  <h4>Chuyên khoa Mắt</h4>
                </a>
                <a href="/than-tiet-nieu-s32">
                  <h4>Thận - Tiết niệu</h4>
                </a>
                <a href="/noi-khoa-s17">
                  <h4>Nội khoa</h4>
                </a>
                <a href="/kham-tong-quat-s31">
                  <h4>Khám tổng quát</h4>
                </a>
                <a href="/nha-khoa-s33">
                  <h4>Nha khoa</h4>
                </a>
                <a href="/tieu-duong-noi-tiet-s21">
                  <h4>Tiểu đường - Nội tiết</h4>
                </a>
                <a href="/phuc-hoi-chuc-nang-s30">
                  <h4>Phục hồi chức năng</h4>
                </a>
                <a href="/chup-cong-huong-tu-s7">
                  <h4>Chụp Cộng hưởng từ</h4>
                </a>
                <a href="/chup-cat-lop-vi-tinh-s8">
                  <h4>Chụp cắt lớp vi tính</h4>
                </a>
                <a href="/noi-soi-tieu-hoa-s9">
                  <h4>Nội soi Tiêu hóa</h4>
                </a>
                <a href="/chup-petct-s20">
                  <h4>Chụp PET/CT</h4>
                </a>
                <a href="/tu-van-tri-lieu-tam-ly-tu-xa-s65">
                  <h4>Tư vấn, trị liệu Tâm lý từ xa</h4>
                </a>
                <a href="/ung-buou-s15">
                  <h4>Ung bướu</h4>
                </a>
                <a href="/suc-khoe-tam-than-tu-xa-s45">
                  <h4>Sức khỏe tâm thần từ xa</h4>
                </a>
                <a href="/bac-si-da-lieu-tu-xa-s44">
                  <h4>Bác sĩ Da liễu từ xa</h4>
                </a>
                <a href="/bac-si-gia-dinh-s41">
                  <h4>Bác sĩ gia đình</h4>
                </a>
                <a href="/tao-hinh-ham-mat-s42">
                  <h4>Tạo hình Hàm Mặt</h4>
                </a>
                <a href="/bac-si-co-xuong-khop-tu-xa-s46">
                  <h4>Bác sĩ Cơ-Xương-Khớp từ xa</h4>
                </a>
                <a href="/bac-si-cot-song-tu-xa-s47">
                  <h4>Bác sĩ Cột sống từ xa</h4>
                </a>
                <a href="/bac-si-tieu-hoa-tu-xa-s48">
                  <h4>Bác sĩ Tiêu hóa từ xa</h4>
                </a>
                <a href="/bac-si-noi-khoa-tu-xa-s49">
                  <h4>Bác sĩ Nội khoa từ xa</h4>
                </a>
                <a href="/bac-si-nam-hoc-tu-xa-s50">
                  <h4>Bác sĩ Nam học từ xa</h4>
                </a>
                <a href="/bac-si-san-phu-khoa-tu-xa-s51">
                  <h4>Bác sĩ Sản phụ khoa từ xa</h4>
                </a>
                <a href="/bac-si-tim-mach-tu-xa-s52">
                  <h4>Bác sĩ Tim mạch từ xa</h4>
                </a>
                <a href="/bac-si-nhi-tu-xa-s53">
                  <h4>Bác sĩ Nhi từ xa</h4>
                </a>
                <a href="/bac-si-tai-mui-hong-tu-xa-s54">
                  <h4>Bác sĩ Tai-Mũi-Họng từ xa</h4>
                </a>
                <a href="/bac-si-noi-tiet-tu-xa-s55">
                  <h4>Bác sĩ Nội tiết từ xa</h4>
                </a>
                <a href="/bac-si-than-kinh-tu-xa-s56">
                  <h4>Bác sĩ Thần kinh từ xa</h4>
                </a>
                <a href="/bac-si-phuc-hoi-chuc-nang-tu-xa-s57">
                  <h4>Bác sĩ Phục hồi chức năng từ xa</h4>
                </a>
                <a href="/bac-si-than--tiet-nieu-tu-xa-s58">
                  <h4>Bác sĩ Thận - Tiết niệu từ xa</h4>
                </a>
                <a href="/xet-nghiem-tai-nha-s59">
                  <h4>Xét nghiệm tại nhà</h4>
                </a>
                <a href="/xet-nghiem-tai-co-so-y-te-s60">
                  <h4>Xét nghiệm tại cơ sơ y tế</h4>
                </a>
                <a href="/bac-si-mat-tu-xa-s62">
                  <h4>Bác sĩ Mắt từ xa</h4>
                </a>
                <a href="/xet-nghiem-gen-s64">
                  <h4>Xét nghiệm Gen</h4>
                </a>
                <a href="/tu-van-tri-lieu-tam-ly-s66">
                  <h4>Tư vấn, trị liệu Tâm lý</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="luachon">
          <ul>
            <li>
              <a href="/#chuyenkhoa" class="mo-cuaso" dl-cuaso="chuyenkhoa">
                <div
                  class="dichvu kham-chuyenkhoa luoi-tai"
                  style={{
                    backgroundImage:
                      'url("https://bookingcare.vn/assets/anh/kham_chuyenkhoa.png")',
                  }}
                ></div>{" "}
                Khám <br />
                Chuyên khoa
              </a>
            </li>
            <li>
              <a href="/#chuyenkhoa" class="mo-cuaso" dl-cuaso="chuyenkhoa">
                <div
                  class="dichvu kham-chuyenkhoa luoi-tai"
                  style={{
                    backgroundImage:
                      'url("https://bookingcare.vn/assets/anh/dichvu_xetnghiem.png")',
                  }}
                ></div>{" "}
                Khám <br />
                Xét Nghiệm
              </a>
            </li>
            <li>
              <a href="/#chuyenkhoa" class="mo-cuaso" dl-cuaso="chuyenkhoa">
                <div
                  class="dichvu kham-chuyenkhoa luoi-tai"
                  style={{
                    backgroundImage:
                      'url("https://bookingcare.vn/assets/anh/kham_nhakhoa.png")',
                  }}
                ></div>{" "}
                Khám <br />
                Nha Khoa
              </a>
            </li>
            <li>
              <a href="/#chuyenkhoa" class="mo-cuaso" dl-cuaso="chuyenkhoa">
                <div
                  class="dichvu kham-chuyenkhoa luoi-tai"
                  style={{
                    backgroundImage:
                      'url("https://bookingcare.vn/assets/anh/kham_tongquat.png")',
                  }}
                ></div>{" "}
                Khám <br />
                Tổng Quát
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="phandoan-nen">
        <div class="vung-bao">
          <div class="phandoan">
            <div class="phandoan-dau">
              <h2 class="phandoan-tieude">Chuyên khoa phổ biến</h2>
            </div>
            <div class="phandoan-ds-4 phandoan-slick-4 slick-initialized slick-slider">
              <div className="slick-track">
                <a
                  href="/co-xuong-khop-s1"
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: 275 }}
                  tabindex="0"
                >
                  <div
                    class="anh-chu-nhat-c150 luoi-tai"
                    style={{
                      backgroundImage: `url('https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg')`,
                    }}
                  ></div>
                  <h3>Cơ Xương Khớp</h3>
                </a>
                <a
                  href="/co-xuong-khop-s1"
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: 275 }}
                  tabindex="0"
                >
                  <div
                    class="anh-chu-nhat-c150 luoi-tai"
                    style={{
                      backgroundImage: `url('https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg')`,
                    }}
                  ></div>
                  <h3>Thần Kinh</h3>
                </a>
                <a
                  href="/co-xuong-khop-s1"
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: 275 }}
                  tabindex="0"
                >
                  <div
                    class="anh-chu-nhat-c150 luoi-tai"
                    style={{
                      backgroundImage: `url('https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg')`,
                    }}
                  ></div>
                  <h3>Tim Mạch</h3>
                </a>
                <a
                  href="/co-xuong-khop-s1"
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: 275 }}
                  tabindex="0"
                >
                  <div
                    class="anh-chu-nhat-c150 luoi-tai"
                    style={{
                      backgroundImage: `url('https://cdn.bookingcare.vn/fr/w300/2019/12/16/175620-nhi-khoa.jpg')`,
                    }}
                  ></div>
                  <h3>Nhi Khoa</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="phandoan-nen">
        <div class="vung-bao">
          <div class="phandoan">
            <div class="phandoan-dau">
              <h2 class="phandoan-tieude">Cơ sở y tế nổi bật</h2>
            </div>
            <div class="phandoan-ds-4 phandoan-slick-4 slick-initialized slick-slider">
              <div className="slick-track">
                <a
                  href="/phong-kham-benh-vien-dai-hoc-y-duoc-1-p154.html"
                  class="slick-slide slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  style={{ width: 275 }}
                  tabindex="0"
                >
                  <div
                    class="anh-chu-nhat-c150 luoi-tai"
                    style={{
                      backgroundImage: `url('https://cdn.bookingcare.vn/fr/w500/2020/05/29/112414-pk-dhyd1.jpg')`,
                    }}
                    data-src="https://cdn.bookingcare.vn/fr/w500/2020/05/29/112414-pk-dhyd1.jpg"
                  ></div>
                  <h3>Phòng khám Bệnh viện Đại học Y Dược 1</h3>
                </a>
                <a
                  href="/phong-kham-benh-vien-dai-hoc-y-duoc-1-p154.html"
                  class="slick-slide slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  style={{ width: 275 }}
                  tabindex="0"
                >
                  <div
                    class="anh-chu-nhat-c150 luoi-tai"
                    style={{
                      backgroundImage: `url('https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg')`,
                    }}
                  ></div>
                  <h3>Bệnh viện Hữu nghị Việt Đức</h3>
                </a>
                <a
                  href="/phong-kham-benh-vien-dai-hoc-y-duoc-1-p154.html"
                  class="slick-slide slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  style={{ width: 275 }}
                  tabindex="0"
                >
                  <div
                    class="anh-chu-nhat-c150 luoi-tai"
                    style={{
                      backgroundImage: `url('https://cdn.bookingcare.vn/fr/w500/2020/05/29/112414-pk-dhyd1.jpg')`,
                    }}
                    data-src="https://cdn.bookingcare.vn/fr/w500/2020/05/29/112414-pk-dhyd1.jpg"
                  ></div>
                  <h3>Phòng khám Bệnh viện Đại học Y Dược 1</h3>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="phandoan-nen">
        <div class="vung-bao">
          <div class="phandoan">
            <div class="phandoan-dau">
              <h2 class="phandoan-tieude">Bác sĩ nổi bật</h2>
            </div>
            <div class="bacsi-ds bacsi-ds-slick slick-initialized slick-slider">
              <div className="slick-track">
                <a
                  href="/pgsts-nguyen-thi-hoai-an-d100.html"
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: 275 }}
                  tabindex="0"
                >
                  <div class="cat-anh anh-tron-120">
                    <img
                      class="luoi"
                      src="https://cdn.bookingcare.vn/fr/w200/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg"
                      data-src="https://cdn.bookingcare.vn/fr/w200/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg"
                    />
                  </div>
                  <h3>PGs.Ts. Nguyễn Thị Hoài An</h3>
                  <h4>
                    <span>Tai Mũi Họng</span>
                    <span>Nhi khoa</span>
                  </h4>
                  <div class="bacsi-ds-noibat">
                    <span> 29 lượt đặt tuần qua</span>
                  </div>
                </a>
                <a
                  href="/pgsts-nguyen-thi-hoai-an-d100.html"
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: 275 }}
                  tabindex="0"
                >
                  <div class="cat-anh anh-tron-120">
                    <img
                      class="luoi"
                      src="https://cdn.bookingcare.vn/fr/w200/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg"
                      data-src="https://cdn.bookingcare.vn/fr/w200/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg"
                    />
                  </div>
                  <h3>PGs.Ts. Nguyễn Thị Hoài An</h3>
                  <h4>
                    <span>Tai Mũi Họng</span>
                    <span>Nhi khoa</span>
                  </h4>
                  <div class="bacsi-ds-noibat">
                    <span> 29 lượt đặt tuần qua</span>
                  </div>
                </a>
                <a
                  href="/pgsts-nguyen-thi-hoai-an-d100.html"
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: 275 }}
                  tabindex="0"
                >
                  <div class="cat-anh anh-tron-120">
                    <img
                      class="luoi"
                      src="https://cdn.bookingcare.vn/fr/w200/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg"
                      data-src="https://cdn.bookingcare.vn/fr/w200/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg"
                    />
                  </div>
                  <h3>PGs.Ts. Nguyễn Thị Hoài An</h3>
                  <h4>
                    <span>Tai Mũi Họng</span>
                    <span>Nhi khoa</span>
                  </h4>
                  <div class="bacsi-ds-noibat">
                    <span> 29 lượt đặt tuần qua</span>
                  </div>
                </a>
                <a
                  href="/pgsts-nguyen-thi-hoai-an-d100.html"
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: 275 }}
                  tabindex="0"
                >
                  <div class="cat-anh anh-tron-120">
                    <img
                      class="luoi"
                      src="https://cdn.bookingcare.vn/fr/w200/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg"
                      data-src="https://cdn.bookingcare.vn/fr/w200/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg"
                    />
                  </div>
                  <h3>PGs.Ts. Nguyễn Thị Hoài An</h3>
                  <h4>
                    <span>Tai Mũi Họng</span>
                    <span>Nhi khoa</span>
                  </h4>
                  <div class="bacsi-ds-noibat">
                    <span> 29 lượt đặt tuần qua</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="phandoan-nen">
        <div class="vung-bao">
          <div class="phandoan">
            <div class="phandoan-dau">
              <h2 class="phandoan-tieude">Cẩm nang</h2>
            </div>
            <div class="phandoan-slick-2 phandoan-ds-2 slick-initialized slick-slider">
              <div className="slick-track">
                <a
                  href="/cam-nang/6-bac-si-da-lieu-kham-chua-benh-lay-qua-duong-tinh-duc-sti-o-ha-noi-p2226.html"
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: 560 }}
                  tabindex="0"
                >
                  <div class="hang">
                    <div class="cot-6">
                      <div
                        class="anh-chu-nhat-c150 luoi-tai"
                        style={{
                          backgroundImage: `url(https://cdn.bookingcare.vn/fr/w300/2020/09/01/155920-benh-hiv-lay-qua-duong-tinh-duc.jpg`,
                        }}
                        data-src="https://cdn.bookingcare.vn/fr/w300/2020/09/01/155920-benh-hiv-lay-qua-duong-tinh-duc.jpg"
                      ></div>
                    </div>
                    <div class="cot-6 phandoan-ds-2-mota">
                      <h3>
                        6 Bác sĩ Da liễu khám chữa bệnh lây qua đường tình dục
                        (STI) ở Hà Nội
                      </h3>
                    </div>
                  </div>
                </a>
                <a
                  href="/cam-nang/6-bac-si-da-lieu-kham-chua-benh-lay-qua-duong-tinh-duc-sti-o-ha-noi-p2226.html"
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{ width: 560 }}
                  tabindex="0"
                >
                  <div class="hang">
                    <div class="cot-6">
                      <div
                        class="anh-chu-nhat-c150 luoi-tai"
                        style={{
                          backgroundImage: `url(https://cdn.bookingcare.vn/fr/w300/2020/09/01/155920-benh-hiv-lay-qua-duong-tinh-duc.jpg`,
                        }}
                        data-src="https://cdn.bookingcare.vn/fr/w300/2020/09/01/155920-benh-hiv-lay-qua-duong-tinh-duc.jpg"
                      ></div>
                    </div>
                    <div class="cot-6 phandoan-ds-2-mota">
                      <h3>
                        6 Bác sĩ Da liễu khám chữa bệnh lây qua đường tình dục
                        (STI) ở Hà Nội
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chantrang-2">
        <div class="vung-bao">
          <div class="hang">
            <div class="cot-4">
              <small>© 2020 KLTN.</small>
            </div>
            <div class="cot-8 chu-phai-vua">
              <a
                target="_blank"
                href="https://bookingcare.vn/themes/app1912/assets/img/social/facebook-square.svg"
              >
                <img
                  class="nut-mxh"
                  src="https://bookingcare.vn/themes/app1912/assets/img/social/facebook-square.svg"
                  alt="Facebook/"
                />
              </a>
              <a
                target="_blank"
                href="https://bookingcare.vn/themes/app1912/assets/img/social/pinterest-square.svg"
              >
                <img
                  class="nut-mxh"
                  src="https://bookingcare.vn/themes/app1912/assets/img/social/pinterest-square.svg"
                  alt="Youtube/"
                />
              </a>
              <a
                target="_blank"
                href="https://bookingcare.vn/themes/app1912/assets/img/social/twitter-square.svg"
              >
                <img
                  class="nut-mxh"
                  src="https://bookingcare.vn/themes/app1912/assets/img/social/twitter-square.svg"
                  alt="pinterest/"
                />
              </a>
              <a target="_blank" href="https://twitter.com/bookingcare">
                <img
                  class="nut-mxh"
                  src="https://bookingcare.vn/themes/app1912/assets/img/social/youtube-square.svg"
                  alt="twitter/"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
