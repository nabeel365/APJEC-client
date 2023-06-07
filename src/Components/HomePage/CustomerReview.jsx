import React from 'react';

const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review: "Craftopia Art School is amazing! The instructors are talented and supportive, and the classes are so much fun. Highly recommended!",
      image: "https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "I've learned so much at Craftopia Art School. The workshops are well-structured, and I've seen a significant improvement in my artistic skills. Love it!",
      image: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY="
    },
    {
        id: 3,
        name: "David Johnson",
        review: "Craftopia Art School exceeded my expectations. The instructors are knowledgeable and passionate about art. I've had a fantastic experience!",
        image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
      },
      {
        id: 4,
        name: "Emily Davis",
        review: "I'm so glad I found Craftopia Art School. It's been a wonderful journey of exploring different art techniques and expressing my creativity. Highly recommended!",
        image: "https://t4.ftcdn.net/jpg/04/44/53/99/360_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg"
      },
      {
        id: 5,
        name: "Sarah Thompson",
        review: "Craftopia Art School has been a game-changer for me. The instructors are incredibly talented and patient, and they have helped me discover my artistic style. I'm grateful for this wonderful learning experience!",
        image: "https://media.istockphoto.com/id/1300972573/photo/pleasant-young-indian-woman-freelancer-consult-client-via-video-call.jpg?b=1&s=612x612&w=0&k=20&c=gApYcn6GubvJA-YoMO00KZAShv66MHEwrsAbcmaq_cQ="
      },
      {
        id: 6,
        name: "Michael Wilson",
        review: "Craftopia Art School is the best place to unleash your creativity. The variety of classes offered is impressive, and the friendly atmosphere makes it a joy to learn. Highly recommend to anyone passionate about art!",
        image: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
      },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Happy Customers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mx-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-center mb-2">{review.name}</h3>
              <p className="text-gray-700 text-center">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
