class InterestController {
  constructor () {
    this.renderTotalInterest = this.renderTotalInterest.bind(this)
  }

  calculateInterest (capital, interestRate, year) {
    return (capital * (interestRate / 100) * year).toFixed()
  }

  renderInterest (req, res) {
    res.render('interest-form')
  }

  renderTotalInterest (req, res) {
    const capital = parseInt(req.body.capital)
    const interestRate = parseFloat(req.body.interestRate)
    const year = parseInt(req.body.year)

    res.render('total-interest', {
      capital,
      interestRate,
      year,
      totalInterest: this.calculateInterest(capital, interestRate, year)
    })
  }
}

module.exports = InterestController
