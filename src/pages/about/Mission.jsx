import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function DefaultTimeline() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2   mx-5  lg:mx-auto gap-10 max-w-screen-xl">
      <div className="lg:w-[32rem] mx-auto">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Transform Your Vision into Reality
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                At Event Carfters, our mission is to turn your corporate event
                vision into a seamless and impactful reality. Whether it's a
                conference, trade show, product launch, or team-building
                workshop, we're committed to bringing your ideas to life.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Reflect Your Brand Identity
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                We believe that every event should be a reflection of your
                brand's identity and objectives. We work closely with you to
                understand your brand's unique characteristics and ensure that
                your event aligns perfectly with your goals.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Deliver Exceptional Experiences
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                We are driven to deliver exceptional event experiences for you
                and your attendees. From the moment your guests arrive until the
                event's conclusion, we strive to exceed expectations in every
                aspect.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="lg:w-[32rem]  mx-auto">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Tailor Services to Your Needs
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                Recognizing that each corporate event is unique, we offer highly
                customizable services. Whether you require full-scale event
                planning or specific event components, our services are tailored
                to meet your specific needs and requirements.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Sweat the Small Stuff
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                We pay meticulous attention to detail in every phase of event
                planning. From venue selection and logistics to decor and
                technology, we meticulously plan and execute every aspect of
                your event, ensuring nothing is overlooked.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Provide Outstanding Client Service
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                Our commitment to excellence extends to our client service. We
                are dedicated to being responsive, communicative, and supportive
                throughout the entire event planning process. Your satisfaction
                and peace of mind are our top priorities.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
