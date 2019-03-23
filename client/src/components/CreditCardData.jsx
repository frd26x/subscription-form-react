import React, { Component } from 'react'

export default class CreditCardData extends Component {
  render() {
    return (
      this.props.step === 3 ? (
<div>
      <form>
          <div class="form-group col-md-6">
            <label for="cardNumber">Card Number</label>
            <input
              type="text"
              class="form-control"
              name="cardNumber"
              value={this.props.creditCardData.cardNumber}
              onChange={this.props.handleInputChange}
              placeholder="4444 6666 7777 8888 9999"
            />
          </div>
          <div class="form-group">
            <label><span class="hidden-xs">Expiration</span> </label>
        	<div class="form-inline">
        		<select name="cardExpirationMonth" onChange={this.props.handleSelectChange} value={this.props.creditCardData.cardExpirationDate.substring(0, 2)}class="form-control" >
				  <option>MM</option>
				  <option>01 </option>
				  <option>02 </option>
				  <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
				</select>
	            <span > / </span>
	            <select name="cardExpirationYear" class="form-control" onChange={this.props.handleSelectChange} value={this.props.creditCardData.cardExpirationDate.substring(3)}>
				  <option>YY</option>
				  <option>19</option>
				  <option>20</option>
          <option>21</option>
				  <option>22</option>
          <option>23</option>
				  <option>24</option>
				</select>
        	</div>
        </div>

          <div class="form-group">
            <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i class="fa fa-question-circle"></i></label>
            <input class="form-control" required="" type="text"/>
        </div>
        </form>
        <button className="btn btn-success" onClick={this.props.nextStep}>Next</button>
        <button className="btn btn-success" onClick={this.props.prevStep}>Prev</button>

      </div>
      ):
      null
      
    )
  }
}
