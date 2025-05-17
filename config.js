var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoic29tbXVsIiwiYSI6ImNtNGtmbW1qbzBkZXMycG83MDUzcDVtd2cifQ.-WOU0aPcC86u7ZUNdMsRlA',
    // showMarkers: true,
    // markerColor: '#3FB1CE',
    // projection: 'equirectangular',
    //Read more about available projections here
    // https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false, 
    footer: 'Somaiyah Hafeez is a data journalist at Columbia Journalism School. <br> Find the code for this project <a href="https://github.com/somaiyahhafeez/pahalgam"> here.</a> <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [

        {
            id: 'slug-style-id-2',
            alignment: 'left',
            hidden: false,
            title: 'April 22: Pahalgam',
            image: './assets/pahalgam.webp',
            description: '',
            location: {
            center: [75.333611, 34.003611],
            zoom: 16, 
            pitch: 0,
            bearing: 0
        }
,
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'May 7: Operation Sindoor: Bahawalpur',
            image: './assets/bahawalpur.avif',
            description: '.',
            location: {

                center: [71.618139, 29.3735237],
                zoom: 18,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'May 7: Operation Sindoor: Muzzafarabad',
            image: './assets/muzzafarabad.jpg',
            
            description: '',
            location: {
                center:[73.4658246, 34.3435801],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'May 7: Operation Sindoor: Kotli',
            image: './assets/kotli.webp',
            description: '',
            location: {
                center: [73.906416, 33.508495],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
             {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'May 7: Operation Sindoor: Muridke',
            image: './assets/muridke.webp',
            description: '',
            location: {
                center: [74.263, 31.836],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'May 10: India targeted Nur Khan Air Base',
            description: '',
            location: { 
            center: [73.09885 , 33.6168],
            zoom: 16,
            pitch: 0,
            bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

             {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'May 10: India attacks PAF Murid Base',
            description: '',
            location: { 
            center: [72.77389, 32.91000],
            zoom: 16,
            pitch: 0,
            bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
             {
            id: 'eighth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'May 10: India attacks PAF Raifiqui Base',
            description: '',
            location: { 
            center: [72.28250, 30.75806],
            zoom: 16,
            pitch: 0,
            bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
