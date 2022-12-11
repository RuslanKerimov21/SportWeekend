import loading from "../module/ajaxloading.js";
import Pagination from "../module/pagination.js";
import passview from "../module/passview.js";
import step from "../module/slide-step.js";
import swipers from "../module/swiper.js";
import tab from "../module/tab.js";
import tabpopup from "../module/tabspopup.js";
import popap from "../popap/popap.js";
import select from "../select/select.js"
window.addEventListener("DOMContentLoaded", () => {
 select();
 step();
 tab();
 tabpopup();
 loading();
 swipers();
 Pagination();
 popap();
 passview();
})