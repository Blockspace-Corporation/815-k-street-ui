<template>
    <BodyPaperField>
        <div class="flex flex-col gap-2 items-center justify-center text-grey">
            <h1 class="text-2xl font-bold">What do our customer say?</h1>
            <p class="text-center">
                Testimonial reviews from our loyal customers
            </p>
        </div>
        <br />
        <br />
        <div class="flex gap-4 flex-wrap justify-center">
            <BodyTestimonialThumb
                class="w-5/12"
                v-for="(review, k) in reviews" :key="`review-item-${k}`"
                :from="review.from"
                :photo="review.photo"
                :rating="review.rating"
                :remarks="review.remarks"
            />
        </div>
    </BodyPaperField>
</template>

<script>
export default {
    data() {
        return {
            reviews: [
                {
                    from: 'Junie Camu',
                    photo: 'images/review-1.png',
                    rating: 5,
                    remarks: 'Every serving good and shareable. Food superb. We are amazed..til next time. Cons: No Credit card, but can be gcash or cash. Wheelchair accessibility: There are ramps to the resto and dining space is wide spaced and accommodate wheelchair'
                },
                {
                    from: 'Brent Go',
                    photo: 'images/review-2.png',
                    rating: 5,
                    remarks: 'From afar, I initially thought it was a Chinese restaurant. It\'s a Korean restaurant on the pricey side. The food is huge and delicious and the service is great and amazing!'
                },
                {
                    from: 'Gunter',
                    photo: 'images/review-3.png',
                    rating: 5,
                    remarks: 'Chinese food cooked in Korean style.  Delicious Chinese-style foods popularized in Korea are here'
                },
                {
                    from: 'Sang jun lee',
                    photo: 'images/review-4.png',
                    rating: 5,
                    remarks: 'Hmm... To be honest, I was surprised when I ate Jjamppong, Jjajangmyeon, and Sweet and Sour Pork. After eating, I thought Chinese food would be okay, so I ordered Korean food. It\'s pretty delicious.'
                },
                {
                    from: 'Sanggi Lee',
                    photo: 'images/review-5.png',
                    rating: 5,
                    remarks: 'I met the Jjambbong of my life here.Healthy and delicious Samseon Jjamppong. And delicious sweet and sour porkIt\'s a small break from the Philippines without delicious food.'
                },
                {
                    from: 'Jeonghyeok Yun',
                    photo: 'images/review-6.png',
                    rating: 5,
                    remarks: 'It was so delicious, the atmosphere was nice, and everyone was so friendly, so I loved it!! I left my wallet behind, but thank you for keeping it well!!'
                },
            ]
        }
    }
}
</script>