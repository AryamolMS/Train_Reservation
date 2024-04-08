import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import offerImage from '../../images/offer.png'
import offerImage2 from '../../images/offer2.png'
import UserHeader from '../Headers/UserHeader'
import { Container } from 'react-bootstrap'
import Header from '../Headers/Header'

function Home({ home }) {
  const commonhome = home ? true : false
  return (
    <>
      <div className='home'>
        {commonhome ?
          <Header />
          :
          <UserHeader />}
        <div className='homecard Card shadow d-flex  justify-content-center mb-5'>
          <div className="search d-flex align-items-center justify-content-center mb-3 mt-3" style={{ height: "100px", width: "80%" }}>
            <Link to={'/guestsearch'} className="w-25 me-2">
              <select name="" id="" style={{ width: "150px" }}>
                <option value="">From</option>
                <option value="">New Delhi</option>
                <option value="">Kolkatha</option>
                <option value="">Banglore</option>
                <option value="">Ernakulam</option>
              </select>
            </Link>

            <Link to={'/guestsearch'} className="w-25 me-2">
              <select name="" id="" style={{ width: "150px" }}>
                <option value="">To</option>
                <option value="">Ernakulam</option>
                <option value="">Banglore</option>
                <option value="">Kolkatha</option>
                <option value="">New Delhi</option>
              </select>
            </Link>

            <Link to={'/guestsearch'}> <input type="date" name="" id="" className="me-4" /></Link>
          </div>


        </div>
      </div>
      <div className='text-center mt-4'>
        <h1>Offers For You</h1>
        <div className='mt-4 d-flex align-items-center justify-content-center'>
          <div className='Card shadow offers rounded d-flex'>
            <div className='mt-3'>
              <img className='rounded' src={offerImage} alt="no image" style={{ width: '200px', height: '200px' }} />
            </div>
            <div className='mt-3'>
              <h3>Flat Rs 80 OFF on Train tickets</h3>
              <p>Offer valid till : 31 Mar</p>
              <button className='btn5'>SUPERB80</button>
            </div>
          </div>
          <div className='Card shadow offers rounded d-flex ms-5'>
            <div className='mt-3'>
              <img className='rounded' src={offerImage2} alt="no image" style={{ width: '200px', height: '200px' }} />
            </div>
            <div className='mt-3'>
              <h3>Flat Rs 80 OFF on Train tickets</h3>
              <p>Offer valid till : 31 Mar</p>
              <button className='btn5'>SUPERB80</button>
            </div>
          </div>
        </div>
      </div>

      <div className='ms-5'>
        <Container>
          <h1 className='mt-5'>Frequently Asked Questions</h1>
          <h4 className='mt-5'>How can I complete an online train ticket booking with redRails?</h4>
          <p>Booking a train ticket online can be completed with ease in just a few simple steps. If you’re on the app, first click on the “redRails” icon that’s displayed on your screen. Enter the source and destination locations along with the date of travel. Once done, a list of trains operating on your route will be displayed. Select the train and class of your choice, select the boarding and destination stations, enter the details of the passenger and complete the payment. You can download the ticket and the invoice once your payment has been processed.</p>
          <hr />
          <h4 className='mt-5'>Do I need to make an account to make an IRCTC train ticket booking online?</h4>
          <p>Yes, and this has its advantages. This would help expedite the booking process when you have to enter details about the passenger and while completing the payment process.</p>
          <hr />
          <h4 className='mt-5'>How is redRails connected to redBus?</h4>
          <p>redRails is a new product that’s offered by redBus. Utilising its massive successful experience in the bus industry, redBus aims to attain the same success in the train industry as well. A customer can view, book, and complete their payment of train tickets on the redBus app or page by clicking on the “redRails” option that’s provided.</p>
          <hr />
          <h4 className='mt-5'>How to cancel a train ticket booked through redRails?</h4>
          <p>Cancelling an online train ticket booking through redRails can be done as easily as booking a train ticket. When you view the details of your train ticket booking on the app or website, you are presented with the option to either modify your booking or cancel the ticket. Click on the option that best suits your travel needs. A small cancellation fee might be charged based on the timing of your cancellation request.</p>
          <hr />
          <h4 className='mt-5'>How do I pay for my online train ticket booking that is made through redRails?</h4>
          <p>You can complete your online train ticket booking by using any of the variety of payment options that are available at your disposal. Customers can use any amount that’s remaining in their redBus wallet, credit or debit cards, Wallets such as Amazon Pay or through UPI payment gateways such as GooglePay, PhonePe, etc. Payments made online on redRails are safe and secure and eliminate the need to wait in a queue.</p>
          <hr />
          <h4 className='mt-5'>Are there any cancellation charges levied when a train ticket is cancelled?</h4>
          <p>Yes, there are. Depending on when the cancellation was initiated, an amount might get deducted to compensate any losses incurred by IRCTC, Railways, etc. Customers can opt for the “Free Cancellation” policy by paying an extra amount at the time of booking. This comes in handy when travel plans are not concrete.</p>
          <hr />
        </Container>
      </div>
    </>
  )
}

export default Home
