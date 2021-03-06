import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(
  Container
)`-mx-8 px-8 bg-gray-900 text-white`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-orange-500 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-orange-500`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`;
const QuoteContainer = tw.div`relative`;
const QuoteIcon = tw(
  QuoteIconBase
)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`;
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`;
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`;
const CustomerImage = tw.img`w-16 h-16 rounded-full`;
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 flex flex-col`;
const CustomerName = tw.span`text-lg font-semibold`;
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`;
const ControlsContainer = tw.div`sm:ml-auto flex`;
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

export default ({
  subheading = "",
  heading = "Testimonials",
  description = "Read What Our Customers Say",
  testimonials = [
    {
      customerName: "Mrs Adeline Teo",
      customerProfile: "Mum of p5 student, Math lesson(B to A)",
      quote:
        "Initially, I was worried about the cost of tuition for my son Ricky, as well as the quality of the tutor. However, the friendly and polite MindFlex’s staff reassured me that their tutors were experienced in teaching and charged reasonable fees. True enough, the tutor that I hired for Ricky has been wonderful, and I am pleased to say that the tuition is well-worth my money as Ricky’s results have improved tremendously.",
    },
    {
      customerName: "Mr Jack",
      customerProfile: "Father of p5 student, Math lesson(B to A)",
      quote:
        "Initially, I was worried about the cost of tuition for my son Ricky, as well as the quality of the tutor. However, the friendly and polite MindFlex’s staff reassured me that their tutors were experienced in teaching and charged reasonable fees. True enough, the tutor that I hired for Ricky has been wonderful, and I am pleased to say that the tuition is well-worth my money as Ricky’s results have improved tremendously.",
    },
    {
      customerName: "Sarah Tan",
      customerProfile: "Student, Math lesson(B to A)",
      quote:
        "Initially, I was worried about the cost of tuition for my son Ricky, as well as the quality of the tutor. However, the friendly and polite MindFlex’s staff reassured me that their tutors were experienced in teaching and charged reasonable fees. True enough, the tutor that I hired for Ricky has been wonderful, and I am pleased to say that the tuition is well-worth my money as Ricky’s results have improved tremendously.",
    },
  ],
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <TestimonialsSlider arrows={false} ref={setSliderRef}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>{testimonial.quote}</Quote>
              </QuoteContainer>
              <CustomerInfoAndControlsContainer>
                <CustomerNameAndProfileContainer>
                  <CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerProfile>
                    {testimonial.customerProfile}
                  </CustomerProfile>
                </CustomerNameAndProfileContainer>
                <ControlsContainer>
                  <ControlButton onClick={sliderRef?.slickPrev}>
                    <ArrowLeftIcon className="icon" />
                  </ControlButton>
                  <ControlButton>
                    <ArrowRightIcon
                      className="icon"
                      onClick={sliderRef?.slickNext}
                    />
                  </ControlButton>
                </ControlsContainer>
              </CustomerInfoAndControlsContainer>
            </Testimonial>
          ))}
        </TestimonialsSlider>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
