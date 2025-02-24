window.hyperexplorer_icons_version = "2.0.0";
if (window.JOS && typeof window.JOS.registerVersion == "function") {
    window.JOS.registerVersion(window.JOS.self)("icons")(window.hyperexplorer_icons_version)();
}

const imageHost = "https://assets.juspay.in/credit/images/";
const clientId = "amity/";



window.getIcons = function() {
    const icons = {
        "jp_circular_checked": imageHost + clientId + "jp_circular_checked.png",
        "jp_emi_circleuncheck": "https://testhtml2.vercel.app/assets/jp_chevron_up.png",
        "jp_radio_emi_bullet": "https://testhtml2.vercel.app/assets/jp_chevron_up.png",
        "jp_filled_square_checkbox": "https://assets.juspay.in/hyper/assets/in.juspay.merchants/images/amity/jp_checkbox_20240321132950.png",
        "jp_cross": imageHost + "common" + "/" + "jp_grey_cross.png",
        "jp_radio_bullet": "https://assets.juspay.in/hyper/assets/in.juspay.merchants/images/amity/jp_radio_20240321134251.png",
        "jp_calendar": "https://assets.juspay.in/hyper/assets/in.juspay.merchants/images/amity/jp_calendar_20240321131645.png",
        "jp_chevron_right": imageHost + clientId + "jp_left_chevron.png",
        "jp_credit_plan": imageHost + clientId + "jp_credit_plan.png",
        "jp_debit_plan": imageHost + clientId + "jp_debit_plan.png",
        "jp_instant_loans": imageHost + clientId + "jp_instantLoans.png",
        // "jp_calendar": imageHost + clientId + "jp_calendar.png",
        "jp_pencil_edit": "https://assets.juspay.in/hyper/assets/in.juspay.merchants/images/amity/jp_edit_20240321132831.png",
        "jp_upi_logo": "https://sandbox.assets.juspay.in/hyper/assets/in.juspay.merchants/images/testcredit/jp_upi_04_42c8b7_2024_02_06_12_23_56.png",
        "jp_offer_logo": "https://sandbox.assets.juspay.in/hyper/assets/in.juspay.merchants/images/testcredit/jp_offer_01_42c8b7_2024_02_06_12_23_49.png",
        "jp_payLater": imageHost + clientId + "jp_payLater.png",
    };
    return JSON.stringify(icons);
};
