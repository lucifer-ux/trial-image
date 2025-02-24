window.hyperexplorer_configuration_version = "2.0.0";
if (window.JOS && typeof window.JOS.registerVersion == "function") {
  window.JOS.registerVersion(window.JOS.self)("configuration")(
    window.hyperexplorer_configuration_version
  )();
}

const font = [
  {
    name: "regular",
    url: "https://assets.juspay.in/hyper/fonts/Manrope-Regular.ttf",
    weight: "300",
  },
  {
    name: "medium",
    url: "https://assets.juspay.in/hyper/fonts/Manrope-Medium.ttf",
    weight: "300",
  },
  {
    name: "bold",
    url: "https://assets.juspay.in/hyper/fonts/Manrope-Bold.ttf",
    weight: "300",
  },
  {
    name: "semibold",
    url: "https://assets.juspay.in/hyper/fonts/Manrope-SemiBold.ttf",
    weight: "300",
  },
];

if (window.JBridge && typeof window.JBridge.loadFonts === "function") {
  window.JBridge.loadFonts(font);
}

window.getMerchantFlowConfig = function () {
  return {
    defaultStart: "BASE_APP_FLOW",
    globalFlowFeature: {},
    flows: [
      {
        name: "BASE_APP_FLOW",
        flowFeatureConfig: {},
        nextFlows: [
          ["CUSTOMER_MODULE_FLOW", "true"],
        ],
      },
      {
        name: "CREDIT_EMI_FLOW",
        flowFeatureConfig: {},
        nextFlows: [
          ["CUSTOMER_MODULE_FLOW", "sahayState.backFlow == 'customer_flow'"],
          ["INFORMATION_FLOW", "sahayState.backFlow == 'customer_info'"],
          ["END_APP_FLOW", "true"],
        ],
      },
      {
        name: "CUSTOMER_MODULE_FLOW",
        flowFeatureConfig: {},
        nextFlows: [
          ["CREDIT_EMI_FLOW", "sahayState.backFlow == 'credit_tab'"],
          ["INFORMATION_FLOW", "true"],
          ["GET_EMI_FLOW", "true"],
        ],
      },
      {
        name: "INFORMATION_FLOW",
        flowFeatureConfig: {
          flowTemplateOrder: [
            {
              screenType: "PERSONAL_INFORMATION_SCREEN",
              templateType: {
                TemplateType: "FormInputs",
                TemplateValue: [
                  "PAN",
                  "FIRST_NAME",
                  "MIDDLE_NAME",
                  "LAST_NAME",
                  "E_MAIL",
                  "DATE_OF_BIRTH",
                  "GENDER",
                ],
              },
            },
            {
              screenType: "PERSONAL_INFORMATION_SCREEN",
              templateType: {
                TemplateType: "FormInputs",
                TemplateValue: [
                  "PIN",
                  "ADDRESS_TYPE"
                ],
              },
            },
            {
              screenType: "FINANCIAL_INFORMATION_SCREEN",
              templateType: {
                TemplateType: "FormInputs",
                TemplateValue: [
                  "INCOME",
                  "INCOME_CONSENT",
                  "EMPLOYMENT_TYPE",
                  "COMPANY_NAME"
                ],
              },
            },
          ],
        },
        nextFlows: [
          ["CUSTOMER_MODULE_FLOW", "sahayState.backFlow == 'back_informationFlow'"],
          ["CREDIT_EMI_FLOW", "sahayState.backFlow == 'credit_tab'"],
          ["GET_EMI_FLOW", "true"],
        ],
      },
      {
        name: "GET_EMI_FLOW",
        flowFeatureConfig: {},
        nextFlows: [
          ["CREDIT_EMI_FLOW", "true"],
        ],
      },
      {
        name: "END_APP_FLOW",
        flowFeatureConfig: {},
        nextFlows: [],
      },
    ],
  };
};





window.getMerchantConfig = function () {
  return JSON.stringify({
    mainConfig: {
      globalConfig: {
        selectedColorTransprant: "#1a3366cc",
        primaryColor: "#1a325d",
        primaryColorTransparent: "#DED8F6",
        backgroundDisabled: "#4DB7DEEE",
        buttonV2DisabledColor: "#1a325d4D",
        otpVersion: "BOXED",
      },
      defaultTabLayout: {
        uiConfig: {
          tabslayout: {
            outertabLayout: {
              visibility: "GONE"
            }
          }
        }
      },
      deafultEmiPlanCard: {
        uiConfig: {
          // planView: {
          //   radioButtonView: {
          //     visibility: "GONE"
          //   }
          // },
          buttonView: {
            visibility: "GONE"
          }
        }
      },
      defaultMainContainerConfig: {
        orientation: "VERTICAL",
        gravity: "CENTER",
        cornerRadii: {
          radius: 12.0,
          corners: {
            topLeft: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
          },
        },
        scrollView: {
          margin: [0, 0, 0, 0],
        },
        closeButton: {
          margin: [0, 0, 0, 16],
          visibility: "GONE"
        },
        mainContainer: {
          width: {
            "#js-expr": [
              ` if (window.isDesktopView())
              693
            else
              "MATCH_PARENT"
            `]
          },
          height: {
            "#js-expr": [
              ` if (window.isDesktopView())
              650 
            else
              "MATCH_PARENT"
            `]
          },
        }
      }
    },
    componentMapping: {
      "*.Global": "globalConfig",
      "*.TABLAYOUT": "defaultTabLayout",
      "*.MAIN_CONTAINER": "defaultMainContainerConfig",
    },
  });
};
