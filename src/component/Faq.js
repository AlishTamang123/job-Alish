import React from 'react'

export const Faq = () => {
  return (
    <div className='container p-5' style={{ "margin-top": "5%" }}>
      <h2 style={{ "text-align": "center" }}>Jobseeker and Employee FAQ</h2><br></br>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>    I have problem logging into my account. What should I do?</strong>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Please confirm your login id and password provided by kumarijob in your email. If you are still not being able to login, please contact us at 01-5244945 / 01-5244374

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Do you charge any amount for job placement?</strong>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Job search and job application through kumarijob is totally free of cost. We do not take any charges from the candidates.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>  Does it cost anything to post a profile in on kumarijob.com?</strong>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              No, it doesn’t cost anything to register you with kumarijob. It is totally free to register, search, apply and get jobs.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
              <strong>Whom should I contact if I have more questions about applications or about a particular open position?</strong>
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Contact the HR person mentioned in the advertisement

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
              <strong>How should i prepare for the interview?</strong>
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            We recommend that you download our Interview Toolbox for advice on preparing for your interview. If you are actively engaged with our recruiter on a position, please contact that recruiter for advice or to answer any questions you have.

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
              <strong>How do i ensure that i will be consider for current or future positions?</strong>
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            We recommend applying online for Career Opportunities that are a match for your skills.
If no position meets your objectives, Submit Resume directly to us and we will put it in our database which is searchable by recruiters when future positions arise.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
