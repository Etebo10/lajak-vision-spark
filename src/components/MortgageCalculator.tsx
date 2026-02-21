import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Percent, Clock } from "lucide-react";

interface MortgageCalculatorProps {
  defaultPrice?: number;
}

const MortgageCalculator = ({ defaultPrice = 500000 }: MortgageCalculatorProps) => {
  const [homePrice, setHomePrice] = useState(defaultPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const result = useMemo(() => {
    const downPayment = homePrice * (downPaymentPercent / 100);
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      return {
        monthlyPayment: loanAmount / numPayments,
        totalPayment: loanAmount,
        totalInterest: 0,
        loanAmount,
        downPayment,
      };
    }

    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - loanAmount;

    return { monthlyPayment, totalPayment, totalInterest, loanAmount, downPayment };
  }, [homePrice, downPaymentPercent, interestRate, loanTerm]);

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
          <Calculator size={18} className="text-foreground" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground">Mortgage Calculator</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-5">
          {/* Home Price */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-muted-foreground flex items-center gap-1.5">
                <DollarSign size={14} /> Home Price
              </label>
              <span className="text-sm font-medium text-foreground">{formatCurrency(homePrice)}</span>
            </div>
            <input
              type="range"
              min={100000}
              max={10000000}
              step={10000}
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full accent-foreground"
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Percent size={14} /> Down Payment
              </label>
              <span className="text-sm font-medium text-foreground">
                {downPaymentPercent}% ({formatCurrency(result.downPayment)})
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={50}
              step={1}
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full accent-foreground"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Percent size={14} /> Interest Rate
              </label>
              <span className="text-sm font-medium text-foreground">{interestRate}%</span>
            </div>
            <input
              type="range"
              min={1}
              max={12}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-foreground"
            />
          </div>

          {/* Loan Term */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Clock size={14} /> Loan Term
              </label>
              <span className="text-sm font-medium text-foreground">{loanTerm} years</span>
            </div>
            <div className="flex gap-2">
              {[15, 20, 30].map((term) => (
                <button
                  key={term}
                  onClick={() => setLoanTerm(term)}
                  className={`flex-1 rounded-xl py-2 text-sm font-medium transition-all ${
                    loanTerm === term
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {term} yr
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-center rounded-2xl bg-secondary/50 p-6">
          <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Payment</p>
          <p className="font-heading text-4xl font-bold text-foreground mb-6">
            {formatCurrency(result.monthlyPayment)}
          </p>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Loan Amount</span>
              <span className="text-foreground font-medium">{formatCurrency(result.loanAmount)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Down Payment</span>
              <span className="text-foreground font-medium">{formatCurrency(result.downPayment)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Interest</span>
              <span className="text-foreground font-medium">{formatCurrency(result.totalInterest)}</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between text-sm">
              <span className="text-muted-foreground">Total Cost</span>
              <span className="text-foreground font-semibold">{formatCurrency(result.totalPayment + result.downPayment)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MortgageCalculator;
