<template>

    <div class="bg-gray-300">
        <div class="px-6 py-24 sm:py-32 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Gallery</h2>
            
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-5">
            <div class="flex flex-col items-center gap-3">
                <p class="mt-6 text-2xl leading-8 text-gray-900">Check out my past work!</p>
                <MyCarousel :slides="galleries[0]" class="w-7/8 lg:w-1/2" />
            </div>

            <div class="flex flex-col items-center gap-3">
                <p class="mt-6 text-2xl leading-8 text-gray-900">Some of my more custom installations.</p>
                <MyCarousel :slides="galleries[1]" class="w-7/8 lg:w-1/2" />
            </div>
            
        </div>

    </div>

    


    

    
</template>

<script setup>

useHead({
        title: 'Our Work Gallery | The Gutters Green Seattle/Tacoma Installations',
        meta: [
            { name: 'description', content: 'Browse our gallery to see the quality of our gutter installations in the Seattle/Tacoma region. At The Gutters Green, we pride ourselves on delivering impeccable craftsmanship.'}
        ]
    })

const galleries = [
    [
        { src: 'images/gallery-2/20210630_175829_HDR.jpg', alt: 'White seamless gutters on residential home. Inside outside corners.'},
        { src: 'images/gallery-2/20210803_144043_HDR.jpg', alt: 'White seamless gutters on residential home. Inside outside corners.'},
        { src: 'images/gallery-2/20210804_154758.jpg', alt: 'Musket Brown seamless gutters on brick house. Inside outside corners.'},
        { src: 'images/gallery-2/20210804_155022_HDR.jpg', alt: 'Musket Brown seamless gutters on brick house. Inside outside corners.'},
        { src: 'images/gallery-2/20210823_173734_HDR.jpg', alt: 'White seamless gutters on light blue house, inside barge boards.'},
        { src: 'images/gallery-2/20210823_173852_HDR.jpg', alt: 'White seamless gutters on light blue house, inside barge boards.'},
        { src: 'images/gallery-2/20210824_144418_HDR.jpg', alt: 'Black seamless gutters on gray house.'},
        
    ],
    [
        { src: 'images/gallery-custom/20210302_105158.jpg', alt: 'Custom inside gutter corner with outlet, black.'},
        { src: 'images/gallery-custom/20210302_114322.jpg', alt: 'Custom inside gutter corner with outlet, black.'},
        { src: 'images/gallery-custom/20210302_114339.jpg', alt: 'Black seamless gutters on light yellow house, inside outside 30 degree corners.'},
        { src: 'images/gallery-custom/20210303_135935_HDR.jpg', alt: 'Black 2x3 downspot attached to custom inside corner.'},
        { src: 'images/gallery-custom/20210316_182358_HDR.jpg', alt: 'White seamless gutter, very acute inside corner, custom.'},
        { src: 'images/gallery-custom/20210908_164952.jpg', alt: 'White seamless gutter, custom fit.'},
        { src: 'images/gallery-custom/20210928_130510.jpg', alt: 'White seamless gutter, custom shallow fit.'},
        { src: 'images/gallery-custom/20210928_130517_HDR.jpg', alt: 'White seamless gutter, custom shallow fit.'},
        { src: 'images/gallery-custom/20210928_173936.jpg', alt: 'White seamless gutter, custom shallow fit, installed on house.'},
        { src: 'images/gallery-custom/20211112_192018.jpg', alt: '3 inch round downspout, custom.'},
    ]
]

</script>