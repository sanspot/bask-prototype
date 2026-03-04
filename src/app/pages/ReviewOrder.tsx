import { useState } from 'react';
import { useNavigate } from 'react-router';
import visaLogo from "../../assets/21bfdff1a8f0333ce68ea169a7deff14fd893a07.png";
import mastercardLogo from "../../assets/a0dafcaf6cced29a48cde07c18df8c3fcc6f76ca.png";
import dinersLogo from "../../assets/fd70c12d49c478020e9be01437b00a9809798dba.png";
import amexLogo from "../../assets/215959cf40f0cbe19b84efd5f4524e6caff983cd.png";
import discoverLogo from "../../assets/451199a739d4f314437dcba817f6bfd9bf060a21.png";

function ButtonStateRow() {
  return (
    <div className="content-stretch flex items-start relative size-[20px]" data-name="ButtonStateRow">
      <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-white content-stretch flex gap-[16px] h-[44px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer" data-name="Button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ButtonStateRow />
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#121212] text-[16px] text-center whitespace-nowrap">Back</p>
    </button>
  );
}

function Container12({ onBack }: { onBack: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[54px] items-center min-h-px min-w-px relative" data-name="Container">
      <Button onClick={onBack} />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#121212] text-[16px] text-center w-[84px]">Checkout</p>
    </div>
  );
}

function StepCount() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between leading-[16.8px] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Step count">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#121212]">REVIEW ORDER</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5d5d]">Step 3 of 4</p>
    </div>
  );
}

function StepBar() {
  return (
    <div className="content-stretch flex gap-[4px] h-[4px] items-center relative shrink-0 w-full" data-name="Step bar">
      <div className="bg-[#2a71e5] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
      <div className="bg-[#2a71e5] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
      <div className="bg-[#2a71e5] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
      <div className="bg-[#f2f2f2] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <StepCount />
      <StepBar />
    </div>
  );
}

function NavStepper({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[393px] z-10" data-name="Nav+Stepper">
      <div className="bg-white content-stretch flex flex-col h-[76px] items-start justify-between relative shrink-0 w-full" data-name="Nav/Top Nav">
        <Container12 onBack={onBack} />
        <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-name="Divider">
          <div className="size-full" />
        </div>
      </div>
      <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Stepper">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

export default function ReviewOrder() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('1234 5678 9012 3456');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
      <div className="bg-[#f9fafb] relative w-[393px] h-screen overflow-hidden shadow-2xl" data-name="Review Order">
        <NavStepper onBack={() => navigate(-1)} />
      
      <div className="absolute top-[148px] left-0 w-full overflow-y-auto pb-[100px]" style={{ height: 'calc(100vh - 248px)' }}>
        <div className="px-[16px] pt-[24px] flex flex-col gap-[16px]">
          {/* Order Summary */}
          <div className="bg-white rounded-[8px] p-[16px] border border-[#e4e4e4]">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] text-[#121212] text-[18px] mb-[16px]">Order Summary</h2>
            
            <div className="mb-[16px]">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#121212] text-[16px]">Sertraline</h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#5d5d5d] text-[14px]">50mg • 30 tablets</p>
            </div>
            
            <div className="bg-[#f8f8f8] rounded-[8px] p-[12px] mb-[16px] border border-[#e4e4e4]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] text-[#364153] text-[14px]">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">Dosage:</span> Take one tablet daily with or without food
              </p>
            </div>
            
            <div className="flex justify-between items-center mb-[8px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] text-[#121212] text-[14px]">Medication</p>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px]">$108.00</p>
            </div>
            
            <div className="flex justify-between items-center mb-[16px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] text-[#121212] text-[14px]">Shipping</p>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#00921b] text-[14px]">Free</p>
            </div>
            
            <div className="border-t border-[#e4e4e4] pt-[16px]">
              <div className="flex justify-between items-center">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] text-[#121212] text-[18px]">Total</p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] text-[#121212] text-[20px]">$108.00</p>
              </div>
            </div>
          </div>

          {/* Shipping To */}
          <div className="bg-white rounded-[8px] p-[16px] border border-[#e4e4e4]">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] text-[#121212] text-[18px] mb-[8px]">Shipping to</h2>
            <div className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] text-[#5d5d5d] text-[14px]">
              <p className="mb-0">Adam Jones</p>
              <p className="mb-0">1 Rupert Avenue</p>
              <p className="mb-0">New York, NE 00123</p>
              <p>United States</p>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-white rounded-[8px] p-[16px] border border-[#e4e4e4]">
            <div className="flex items-center gap-[8px] mb-[16px]">
              <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="2" y1="10" x2="22" y2="10" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] text-[#121212] text-[18px]">Payment Details</h2>
            </div>
            
            <div className="flex flex-col gap-[16px]">
              <div>
                <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px] block mb-[8px]">Card number</label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full h-[48px] px-[16px] pr-[120px] rounded-[8px] border border-[#e4e4e4] font-['Inter:Regular',sans-serif] text-[14px] text-[#121212]"
                  />
                  <div className="absolute right-[12px] top-1/2 -translate-y-1/2 flex gap-[4px]">
                    <img src={visaLogo} alt="Visa" className="w-[23px] h-[16px]" />
                    <img src={mastercardLogo} alt="Mastercard" className="w-[32px] h-[20px]" />
                    <img src={dinersLogo} alt="Diners Club" className="w-[32px] h-[20px]" />
                    <img src={amexLogo} alt="American Express" className="w-[32px] h-[20px]" />
                    <img src={discoverLogo} alt="Discover" className="w-[32px] h-[20px]" />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-[16px]">
                <div className="flex-1">
                  <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px] block mb-[8px]">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="w-full h-[48px] px-[16px] rounded-[8px] border border-[#e4e4e4] font-['Inter:Regular',sans-serif] text-[14px] text-[#121212] placeholder:text-[#9ca3af]"
                  />
                </div>
                <div className="flex-1">
                  <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px] block mb-[8px]">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full h-[48px] px-[16px] rounded-[8px] border border-[#e4e4e4] font-['Inter:Regular',sans-serif] text-[14px] text-[#121212] placeholder:text-[#9ca3af]"
                  />
                </div>
              </div>
              
              <div className="flex gap-[8px] p-[12px] bg-[#f9fafb] rounded-[8px]">
                <svg className="w-[16px] h-[16px] shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none">
                  <rect x="5" y="11" width="14" height="10" rx="2" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17a1 1 0 100-2 1 1 0 000 2z" fill="#6b7280"/>
                  <path d="M8 11V7a4 4 0 118 0v4" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] text-[#6b7280] text-[12px]">
                  Your payment information is encrypted and secure. We never store your full card details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[393px] bg-white p-[16px] border-t border-white" style={{ boxShadow: '0 -2px 10px rgba(0,0,0,0.1)' }}>
        <button
          onClick={handleSubmit}
          className="w-full bg-[#2a71e5] h-[44px] rounded-[8px] cursor-pointer hover:bg-[#1e5bbf] transition-colors"
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[16px] text-center text-white">Pay $108.00</p>
        </button>
      </div>
      </div>
    </div>
  );
}