
import React from "react";

export const EmailTemplate: React.FC = () => {
  return (
    <table width="100%" cellPadding="0" cellSpacing="0" style={{ maxWidth: "875px", margin: "0 auto", backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif" }}>
      <tr>
        <td style={{ padding: "20px" }}>
          {/* Header Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ 
            backgroundColor: "#ffffff", 
            borderRadius: "8px",
            border: "1px solid #EAF6F4",
            padding: "32px 16px 16px",
          }}>
            <tr>
              <td>
                <div style={{ 
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "rgba(21,34,76,1)",
                  marginBottom: "4px"
                }}>
                  Weekly Email Summary
                </div>
                <div style={{ 
                  fontSize: "16px",
                  color: "rgba(65,75,109,1)",
                  marginBottom: "32px"
                }}>
                  From Apr 12, 2025 to Apr 20, 2025
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td style={{ padding: "0 6px" }}>
                      <table cellPadding="0" cellSpacing="0" style={{
                        border: "1px solid #B6BDD6",
                        borderRadius: "4px",
                        backgroundColor: "#ffffff",
                        padding: "8px",
                        textAlign: "center",
                        width: "72px"
                      }}>
                        <tr>
                          <td style={{
                            fontSize: "40px",
                            fontWeight: "bold",
                            color: "rgba(21,34,76,1)",
                          }}>28</td>
                        </tr>
                        <tr>
                          <td style={{
                            fontSize: "12px",
                            color: "rgba(65,75,109,1)",
                          }}>Total</td>
                        </tr>
                      </table>
                    </td>
                    <td style={{ padding: "0 6px" }}>
                      <table cellPadding="0" cellSpacing="0" style={{
                        border: "1px solid #B6BDD6",
                        borderRadius: "4px",
                        backgroundColor: "#ffffff",
                        padding: "8px",
                        textAlign: "center",
                        width: "72px"
                      }}>
                        <tr>
                          <td style={{
                            fontSize: "40px",
                            fontWeight: "bold",
                            color: "rgba(21,34,76,1)",
                          }}>21</td>
                        </tr>
                        <tr>
                          <td style={{
                            fontSize: "12px",
                            color: "rgba(65,75,109,1)",
                          }}>Read</td>
                        </tr>
                      </table>
                    </td>
                    <td style={{ padding: "0 6px" }}>
                      <table cellPadding="0" cellSpacing="0" style={{
                        border: "1px solid #B6BDD6",
                        borderRadius: "4px",
                        backgroundColor: "#ffffff",
                        padding: "8px",
                        textAlign: "center",
                        width: "72px"
                      }}>
                        <tr>
                          <td style={{
                            fontSize: "40px",
                            fontWeight: "bold",
                            color: "rgba(21,34,76,1)",
                          }}>7</td>
                        </tr>
                        <tr>
                          <td style={{
                            fontSize: "12px",
                            color: "rgba(65,75,109,1)",
                          }}>Unread</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          {/* Important Communications Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: "40px" }}>
            <tr>
              <td style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "rgba(21,34,76,1)",
                paddingBottom: "16px"
              }}>
                Important Communications
              </td>
            </tr>
            <tr>
              <td style={{ color: "rgba(21,34,76,1)", fontSize: "16px", lineHeight: "1.5" }}>
                • Security alert from Google regarding a new sign-in on a Mac.<br />
                • Google Workspace announcement about Google Vids becoming a core service.<br />
                • HubSpot and Planable free account deactivation notices.<br />
                • Google Cloud Organization now available for domain.
              </td>
            </tr>
          </table>

          {/* Categories Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: "40px" }}>
            <tr>
              <td style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "rgba(21,34,76,1)",
                paddingBottom: "16px"
              }}>
                Category Summaries
              </td>
            </tr>
            <tr>
              <td style={{ color: "rgba(21,34,76,1)", fontSize: "16px", lineHeight: "1.5" }}>
                <div style={{ marginBottom: "16px" }}>
                  <strong>5 Weekly Summaries</strong><br />
                  From riseabove@mindful-institute.org summarizing email activity.
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <strong>4 Security/Account Notifications</strong><br />
                  From Google security alert, Google Cloud Organization, HubSpot account, Planable account.
                </div>
                {/* ... Additional categories would go here */}
              </td>
            </tr>
          </table>

          {/* Footer */}
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ 
            marginTop: "40px", 
            borderTop: "1px solid #EAF6F4",
            padding: "16px 0"
          }}>
            <tr>
              <td style={{
                fontSize: "14px",
                color: "rgba(65,75,109,1)",
                textAlign: "left"
              }}>
                This report was automatically generated by the Weekly Email Summary Automation.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};
