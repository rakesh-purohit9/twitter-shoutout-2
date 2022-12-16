import React from "react";

import { Column, Row, Img, Text, Grid, Stack } from "components";
import TweetCard from "components/TweetCard";

const GiveawayPage = () => {
  return (
    <>
      <Column className="bg-black_900 flex flex-col font-gilroy items-center justify-start mx-[auto] sm:p-[15px] md:p-[24px] p-[36px] w-[100%]">
        <Column className="flex flex-col items-center justify-start max-w-[1241px] sm:mb-[14px] md:mb-[19px] mb-[28px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex sm:flex-col flex-row md:flex-wrap sm:flex-wrap items-center sm:items-center justify-between sm:justify-center sm:px-[0] w-[100%]">
            <Img
              src="images/img_group.svg"
              className="flex-shrink-0 max-w-[100%] w-[14%] sm:w-[50%]"
              alt="Group"
            />
            <Text
              className="bg-black_900 flex-grow font-medium md:p-[13px] sm:p-[15px] px-[20px] py-[19px] rounded-radius6 text-white_A700"
              as="h1"
              variant="h1"
            >
              DhiWise x AWS Ahmedabad Shoutout
            </Text>
          </Row>
          <Column className="flex flex-col items-center justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] w-[100%]">
            <Grid className="sm:gap-[14px] md:gap-[19px] gap-[28px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
              <TweetCard
                className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]"
                hashtag="#AppleMagicMouseGiveAwayContest"
                desc="Quote this tweet with your picture with our #Flutter props ar DhiWise booth at @flutterconfin today and stand a chance to win an Apple Magic Mouse! Head to this link for the T&C."
              />
              <TweetCard
                className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]"
                hashtag="#AppleMagicMouseGiveAwayContest"
                desc="Quote this tweet with your picture with our #Flutter props ar DhiWise booth at @flutterconfin today and stand a chance to win an Apple Magic Mouse! Head to this link for the T&C."
              />
              <TweetCard
                className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]"
                hashtag="#AppleMagicMouseGiveAwayContest"
                desc="Quote this tweet with your picture with our #Flutter props ar DhiWise booth at @flutterconfin today and stand a chance to win an Apple Magic Mouse! Head to this link for the T&C."
              />
              <TweetCard
                className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]"
                hashtag="#AppleMagicMouseGiveAwayContest"
                desc="Quote this tweet with your picture with our #Flutter props ar DhiWise booth at @flutterconfin today and stand a chance to win an Apple Magic Mouse! Head to this link for the T&C."
              />
              <TweetCard
                className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]"
                hashtag="#AppleMagicMouseGiveAwayContest"
                desc="Quote this tweet with your picture with our #Flutter props ar DhiWise booth at @flutterconfin today and stand a chance to win an Apple Magic Mouse! Head to this link for the T&C."
              />
              <TweetCard
                className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]"
                hashtag="#AppleMagicMouseGiveAwayContest"
                desc="Quote this tweet with your picture with our #Flutter props ar DhiWise booth at @flutterconfin today and stand a chance to win an Apple Magic Mouse! Head to this link for the T&C."
              />
            </Grid>
          </Column>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:items-center items-end justify-between sm:justify-center mt-[120px] sm:mt-[63px] md:mt-[82px] sm:px-[0] w-[100%]">
            <Text
              className="font-normal sm:m-[5px] mb-[2px] md:mt-[4px] mt-[6px] not-italic sm:p-[5px] sm:text-[21px] text-white_A700 w-[auto]"
              as="h3"
              variant="h3"
            >
              Powered by DhiWIse
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
              <Img
                src="images/img_image1.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageOne"
              />
              <Img
                src="images/img_image2.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageTwo"
              />
              <Img
                src="images/img_image3.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageThree"
              />
              <Img
                src="images/img_image6.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageSix"
              />
              <Img
                src="images/img_image5.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageFive"
              />
              <Img
                src="images/img_image4.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageFour"
              />
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default GiveawayPage;
