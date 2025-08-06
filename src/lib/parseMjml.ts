import mjml2html from "mjml";

export function parseNewContact(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  const parsedMail = mjml2html(`
    <mjml>
  <mj-head>
    <mj-font href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One" name="Bagel Fat One"></mj-font>
    <mj-font href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800" name="Open Sans"></mj-font>
    <mj-attributes>
      <mj-all font-family="Open Sans" font-size="16px"></mj-all>
    </mj-attributes>
    <mj-style>
      :root {
      	--primary: #0c8a2e;
      }
      
      .letter-container {
      	background-color: rgba(0, 0, 0, 0.02);
        padding: 10px;
      	border: 1px solid rgba(0, 0, 0, 0.5);
      }
      
      .letter-section {
      	margin-bottom: 20px;
      }
      
      .letter-title {
      	font-size: 14px;
      	font-weight: 600;
      	margin: 0;
        padding: 0;
      }
    </mj-style>
  </mj-head>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-family="Bagel Fat One" color="#0c8a2e" font-size="25px">
          New Message from ${name.split(" ")[0]}.
        </mj-text>
        
				<mj-text>Mr Jaros,</mj-text>
        <mj-text>You have a new message.</mj-text>
        
        <mj-text>
          <div class="letter-container">
            <div class="letter-section">
              <p class="letter-title">Name</p>
              <p>${name}</p>
            </div>
            
            <div class="letter-section">
              <p class="letter-title">Email</p>
              <p>${email}</p>
            </div>
            
            <div class="letter-section">
              <p class="letter-title">Subject</p>
              <p>${subject}</p>
            </div>
            
            <div class="letter-section">
              <p class="letter-title">Message</p>
              <pre style="font-family: Open Sans; white-space: pre-wrap;">${message}</pre>
            </div>
          </div>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`)

  return parsedMail.html
}
