import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is the first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be super cool and totally rad.",
  },
  {
    id: "m2",
    title: "This is the second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be super cool and totally rad.",
  },
  {
    id: "m3",
    title: "This is the third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a third, amazing meetup which you definitely should not miss. It will be super cool and totally rad.",
  },
];

function AllMeetupsPage() {
  return (
    <>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </>
  );
}

export default AllMeetupsPage;
