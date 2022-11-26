import React from 'react'

export const ContactUs = () => {
  return (
    <>
    <div className='container d-flex justify-content-between ' style={{"margin-top":"7%"}}>
        <div className="mapSection" style={{width:'20%'}}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5186930590735!2d85.31902561501522!3d27.701267082794544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19688077a1ff%3A0x3ea9b1c08b4234dc!2sMind%20Risers%20Consortium%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1667109256320!5m2!1sen!2snp" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <div className="messageSection" style={{width:'50%'}}>
        {/* <!--Section: Contact v.2--> */}
<section class="mb-4">

    {/* <!--Section heading--> */}
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    {/* <!--Section description--> */}
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>


        {/* <!--Grid column--> */}
        <div class="col-md-9 mb-md-0 mb-5 pl-6" >
            <form id="contact-form" name="contact-form" action="mail.php" method="POST" >

                {/* <!--Grid row--> */}
                <div class="row" style={{"margin-left":"9%" , "margin-bottom":"2%"}}>

                    {/* <!--Grid column--> */}
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class="col-md-6" >
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row" style={{"margin-left":"9%" , "margin-bottom":"2%"}}>
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row" style={{"margin-left":"9%" , "margin-bottom":"2%"}}>

                    {/* <!--Grid column--> */}
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                {/* <!--Grid row--> */}

            </form>

            <div className='text-center'>
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
       
        {/* <!--Grid column--> */}

    

</section>
{/* <!--Section: Contact v.2--> */}
        </div>

    </div>
    </>
  )
}
