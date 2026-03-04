import { useState } from 'react';
import { useNavigate } from 'react-router';

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
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#121212]">SHIPPING</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5d5d]">Step 2 of 4</p>
    </div>
  );
}

function StepBar() {
  return (
    <div className="content-stretch flex gap-[4px] h-[4px] items-center relative shrink-0 w-full" data-name="Step bar">
      <div className="bg-[#2a71e5] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
      <div className="bg-[#2a71e5] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
      <div className="bg-[#f2f2f2] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
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

function Container16() {
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
          <Container16 />
        </div>
      </div>
    </div>
  );
}

export default function ShippingDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'Adam Jones',
    phone: '+1 1234 4567 891',
    address1: 'Rupert Av.',
    address2: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: 'NE 00123',
    country: 'USA'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/review');
  };

  return (
    <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
      <div className="bg-white relative w-[393px] h-screen overflow-hidden shadow-2xl" data-name="Shipping Details">
        <NavStepper onBack={() => navigate(-1)} />
      
      <div className="absolute top-[148px] left-0 w-full overflow-y-auto pb-[100px]" style={{ height: 'calc(100vh - 248px)' }}>
        <div className="px-[16px] pt-[24px]">
          <h1 className="font-['Inter:Bold',sans-serif] font-bold leading-[28.8px] text-[#111827] text-[24px] mb-[24px]">Shipping details</h1>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
            <div>
              <div className="flex items-center gap-[8px] mb-[16px]">
                <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#2a71e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="#2a71e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[16px]">Delivery Contact</h2>
              </div>
              
              <div className="flex flex-col gap-[16px]">
                <div>
                  <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px] block mb-[8px]">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full h-[48px] px-[16px] rounded-[8px] border border-[#e4e4e4] font-['Inter:Regular',sans-serif] text-[14px] text-[#121212]"
                  />
                </div>
                
                <div>
                  <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px] block mb-[8px]">Phone</label>
                  <div className="flex gap-[8px]">
                    <div className="w-[72px] h-[48px] px-[12px] rounded-[8px] border border-[#e4e4e4] flex items-center gap-[4px]">
                      <span className="text-[20px]">🇺🇸</span>
                      <span className="text-[12px]">▼</span>
                    </div>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="flex-1 h-[48px] px-[16px] rounded-[8px] border border-[#e4e4e4] font-['Inter:Regular',sans-serif] text-[14px] text-[#121212]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-[8px] mb-[16px]">
                <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#2a71e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="#2a71e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[16px]">Shipping Address</h2>
              </div>
              
              <div className="flex flex-col gap-[16px]">
                <div>
                  <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px] block mb-[8px]">Address line 1</label>
                  <input
                    type="text"
                    value={formData.address1}
                    onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                    className="w-full h-[48px] px-[16px] rounded-[8px] border-2 border-[#ef4444] font-['Inter:Regular',sans-serif] text-[14px] text-[#121212]"
                  />
                  <p className="flex items-center gap-[4px] mt-[4px] text-[#ef4444] font-['Inter:Regular',sans-serif] text-[12px]">
                    <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Please enter a valid address
                  </p>
                </div>
                
                <div>
                  <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px] block mb-[8px]">Address line 2 <span className="font-['Inter:Regular',sans-serif] text-[#5d5d5d]">(optional)</span></label>
                  <input
                    type="text"
                    value={formData.address2}
                    onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                    className="w-full h-[48px] px-[16px] rounded-[8px] border border-[#e4e4e4] font-['Inter:Regular',sans-serif] text-[14px] text-[#121212]"
                  />
                </div>
                
                <div>
                  <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px] block mb-[8px]">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-[48px] px-[16px] rounded-[8px] border border-[#e4e4e4] font-['Inter:Regular',sans-serif] text-[14px] text-[#121212]"
                  />
                </div>
                
                <div className="flex gap-[16px]">
                  <div className="flex-1">
                    <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px] block mb-[8px]">State</label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full h-[48px] px-[16px] rounded-[8px] border border-[#e4e4e4] font-['Inter:Regular',sans-serif] text-[14px] text-[#121212] appearance-none bg-white"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23121212\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                      <option value="NY">NY</option>
                      <option value="CA">CA</option>
                      <option value="TX">TX</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px] block mb-[8px]">ZIP Code</label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full h-[48px] px-[16px] rounded-[8px] border border-[#e4e4e4] font-['Inter:Regular',sans-serif] text-[14px] text-[#121212]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[#121212] text-[14px] block mb-[8px]">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full h-[48px] px-[16px] rounded-[8px] border border-[#e4e4e4] font-['Inter:Regular',sans-serif] text-[14px] text-[#121212]"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[393px] bg-white p-[16px] border-t border-white" style={{ boxShadow: '0 -2px 10px rgba(0,0,0,0.1)' }}>
        <button
          onClick={handleSubmit}
          className="w-full bg-[#2a71e5] h-[44px] rounded-[8px] cursor-pointer hover:bg-[#1e5bbf] transition-colors"
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[16px] text-center text-white">Continue to Payment</p>
        </button>
      </div>
      </div>
    </div>
  );
}