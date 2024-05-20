


const CardContent = {
  cardsV2: [
    {
      cardId: "unique-card-id",
      card:{
  "header": {
    "title": "KMS CI Bot",
    "subtitle": `Kisaan ${process.env.SERVICE_NAME} Service has been deployed successfully 🚀`,
    "imageUrl": "data:image/jpeg;base64,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",
    "imageType": "CIRCLE"
  },
  "sections": [
    {
      "header": "Build Succeeded 🏆",
      "collapsible": false,
      "uncollapsibleWidgetsCount": 3,
      "widgets": [
        {
          "columns": {
            "columnItems": [
              {
                "horizontalSizeStyle": "FILL_AVAILABLE_SPACE",
                "horizontalAlignment": "START",
                "verticalAlignment": "CENTER",
                "widgets": [
                  {
                    "decoratedText": {
                      "icon": {
                        "knownIcon": "BOOKMARK"
                      },
                      "topLabel": "Environment",
                      "text": `<b>${process.env.ENVIRONMENT}</b>`
                    }
                  }
                ]
              },
              {
                "widgets": [
                  {
                    "decoratedText": {
                      "icon": {
                        "knownIcon": "MEMBERSHIP"
                      },
                      "topLabel": "Service",
                      "text": `<b>${process.env.SERVICE_NAME}</b>`
                    }
                  }
                ]
              }
            ]
          }
        },
          {
          "columns": {
            "columnItems": [
              {
                "horizontalSizeStyle": "FILL_AVAILABLE_SPACE",
                "horizontalAlignment": "START",
                "verticalAlignment": "CENTER",
                "widgets": [
                  {
                    "decoratedText": {
                      "icon": {
                        "knownIcon": "TICKET"
                      },
                      "topLabel": "Pull Request",
                      "text": `<a href=${process.env.PR_URL}><b>${process.env.PULL_REQUEST}</b></a>`
                    }
                  }
                ]
              },
              {
                "widgets": [
                  {
                    "decoratedText": {
                      "icon": {
                        "knownIcon": "CONFIRMATION_NUMBER_ICON"
                      },
                      "topLabel": "Source",
                      "text": `<b>${process.env.SOURCE}</b>`
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          "divider": {}
        },
        {
          "textParagraph": {
            "text": "Service has been deployed on AWS Production Server. It may take 1-2 minutes for ECS to update task definition."
          }
        }
      ]
    }
  ]
}
    },
  ],
};


module.exports = CardContent;