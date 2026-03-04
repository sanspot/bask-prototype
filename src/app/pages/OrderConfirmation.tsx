import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-pt14dmvt2l";

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

function Container({ onBack }: { onBack: () => void }) {
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
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#121212]">ORDER CONFIRMED</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5d5d]">Step 4 of 4</p>
    </div>
  );
}

function StepBar() {
  return (
    <div className="content-stretch flex gap-[4px] h-[4px] items-center relative shrink-0 w-full" data-name="Step bar">
      <div className="bg-[#2a71e5] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
      <div className="bg-[#2a71e5] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
      <div className="bg-[#2a71e5] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
      <div className="bg-[#2a71e5] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
    </div>
  );
}

function StepperContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <StepCount />
      <StepBar />
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="absolute left-[13.99px] size-[35.991px] top-[13.99px]" data-name="CheckCircle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9914 35.9914">
        <g id="CheckCircle">
          <path d={svgPaths.p26a0900} id="Vector" stroke="var(--stroke-0, #00921B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.99928" />
          <path d={svgPaths.p367ad700} id="Vector_2" stroke="var(--stroke-0, #00921B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.99928" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#b5feb6] relative rounded-[22001400px] shrink-0 size-[63.992px]" data-name="Icon">
      <CheckCircle />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[7.991px] h-[64.002px] items-center justify-center not-italic relative shrink-0 text-center w-full whitespace-nowrap" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28.8px] relative shrink-0 text-[#121212] text-[24px]">Order Confirmed!</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5d5d5d] text-[16px]">Your prescription is being prepared</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f2f2f2] h-[85.281px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.656px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3.996px] items-center justify-center not-italic p-[16px] relative size-full text-center">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Order Number</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#121212] text-[20px] w-full">ORD-BFAFDQAW</p>
        </div>
      </div>
    </div>
  );
}

function ConfirmationCard() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Confirmation card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[16px] py-[24px] relative w-full">
          <Icon />
          <Container2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Package() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Package">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9986 19.9986">
        <g clipPath="url(#clip0_1_1863)" id="Package">
          <path d={svgPaths.p1f95f00} id="Vector" stroke="var(--stroke-0, #2A71E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
          <path d="M9.99931 18.3321V9.99931" id="Vector_2" stroke="var(--stroke-0, #2A71E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
          <path d={svgPaths.p1fbb1000} id="Vector_3" stroke="var(--stroke-0, #2A71E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
          <path d={svgPaths.p59fe500} id="Vector_4" stroke="var(--stroke-0, #2A71E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
        </g>
        <defs>
          <clipPath id="clip0_1_1863">
            <rect fill="white" height="19.9986" width="19.9986" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#e2f3ff] relative rounded-[10px] shrink-0 size-[39.997px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Package />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f8f8f8] h-[63.971px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#364153] text-[0px] text-[14px] w-full">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px]">Dosage:</span>
          <span className="leading-[21px]">{` Take one tablet daily with or without food`}</span>
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] not-italic relative shrink-0 text-[#121212] text-[18px] whitespace-nowrap">Your Order</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#121212] text-[16px] whitespace-nowrap">Sertraline</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d5d5d] text-[14px] tracking-[-0.1504px] whitespace-nowrap">50mg • 30 tablets</p>
        <Container8 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start relative w-full">
        <Icon1 />
        <Container7 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.656px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Container6 />
      </div>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9986 19.9986">
        <g clipPath="url(#clip0_1_1859)" id="MapPin">
          <path d={svgPaths.p343f500} id="Vector" stroke="var(--stroke-0, #2A71E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
          <path d={svgPaths.p595ac00} id="Vector_2" stroke="var(--stroke-0, #2A71E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
        </g>
        <defs>
          <clipPath id="clip0_1_1859">
            <rect fill="white" height="19.9986" width="19.9986" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#e2f3ff] relative rounded-[10px] shrink-0 size-[39.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <MapPin />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start not-italic relative w-full whitespace-nowrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[#121212] text-[18px]">Shipping Address</p>
        <div className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#5d5d5d] text-[14px]">
          <p className="mb-0">123 Main Street</p>
          <p className="mb-0">New York, NE 00123</p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start relative w-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.656px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Container10 />
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9986 19.9986">
        <g clipPath="url(#clip0_1_1853)" id="Calendar">
          <path d="M6.66621 1.66655V4.99966" id="Vector" stroke="var(--stroke-0, #2A71E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
          <path d="M13.3324 1.66655V4.99966" id="Vector_2" stroke="var(--stroke-0, #2A71E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
          <path d={svgPaths.p24d90a00} id="Vector_3" stroke="var(--stroke-0, #2A71E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
          <path d="M2.49983 8.33276H17.4988" id="Vector_4" stroke="var(--stroke-0, #2A71E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
        </g>
        <defs>
          <clipPath id="clip0_1_1853">
            <rect fill="white" height="19.9986" width="19.9986" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#e2f3ff] relative rounded-[10px] shrink-0 size-[39.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Calendar />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start not-italic relative w-full whitespace-nowrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[#121212] text-[18px]">Estimated Delivery</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#5d5d5d] text-[14px]">Saturday, March 7, 2026</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[#6a7282] text-[12px]">{`You'll receive tracking information via email`}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start relative w-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.656px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold h-[27.99px] items-center justify-between relative shrink-0 text-[#121212] w-full" data-name="Container">
      <p className="leading-[27px] relative shrink-0 text-[18px]">Total Paid</p>
      <p className="leading-[26px] relative shrink-0 text-[20px]">$34.99</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0.656px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic p-[16px] relative w-full whitespace-nowrap">
        <Container18 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#6a7282] text-[14px]">A receipt has been sent to your email</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container9 />
      <Container13 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#e2f3ff] content-stretch flex flex-col gap-[8px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[357.994px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#2a71e5] border-[0.656px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] not-italic relative shrink-0 text-[#121212] text-[18px] whitespace-nowrap">{`What's Next?`}</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc min-w-full not-italic relative shrink-0 text-[#121212] text-[14px] w-[min-content] whitespace-pre-wrap">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[21px]">Your prescription is being processed by our pharmacy</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[21px]">{`You'll receive shipping updates via email and SMS`}</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[21px]">Questions? Contact our support team anytime</span>
        </li>
      </ul>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f8f8f8] relative w-full overflow-y-auto pb-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[16px] relative w-full">
        <ConfirmationCard />
        <Container4 />
        <Container19 />
      </div>
    </div>
  );
}

function Content({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-[#f9fafb] absolute top-0 left-0 w-full flex flex-col items-start overflow-y-auto" style={{ height: 'calc(100vh - 136px)' }} data-name="Content">
      {/* Top Nav without Back Button */}
      <div className="bg-white content-stretch flex flex-col h-[76px] items-start justify-between relative shrink-0 w-full" data-name="Nav/Top Nav">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-full relative cursor-pointer hover:bg-gray-50 transition-colors"
          style={{ height: '75px' }}
          aria-label="Restart prototype"
        >
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic text-[#121212] text-[16px]">Checkout</p>
        </button>
        <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-name="Divider">
          <div className="size-full" />
        </div>
      </div>
      
      {/* Stepper */}
      
      <Container1 />
    </div>
  );
}

export default function OrderConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
      <div className="content-stretch flex flex-col items-start relative w-[393px] h-screen overflow-hidden shadow-2xl" data-name="Frame05">
        <Content onBack={() => navigate('/')} />
      <div className="absolute bottom-0 left-0 w-[393px] bg-white p-[16px] border-t border-white" style={{ boxShadow: '0 -2px 10px rgba(0,0,0,0.1)' }}>
        <button
          onClick={() => navigate('/review')}
          className="w-full bg-[#2a71e5] h-[44px] rounded-[8px] cursor-pointer hover:bg-[#1e5bbf] transition-colors mb-[16px]"
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[16px] text-center text-white">Track my Order</p>
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-white h-[44px] rounded-[8px] cursor-pointer hover:bg-gray-50 transition-colors border border-[#e4e4e4]"
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[16px] text-center text-[#121212]">Back to Home</p>
        </button>
      </div>
      </div>
    </div>
  );
}