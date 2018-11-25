var imgData = null;
var app = angular.module('beadApp', []).controller('bead-cont', function($scope, $http) {
    $scope.gotHint = function() {
        $scope.notYetHinted = false;
        localStorage.scrapImageHasHinted = true;
        $scope.$apply();
    }
    var pik = document.createElement('img');
    pik.crossOrigin = 'Anonymous';
    $scope.statsShow = true;
    $scope.trunc = function(n) {
        return parseInt(n)
    };
    $scope.board = {
        w: 32,
        h: 32
    }
    // $scope.allColOpts
    $scope.allColOpts = angular.copy(colVals).map(t => {
        t.active = false;
        t.hsl = rgbToHsl(...t.rgb);
        return t;
    }).sort((a, b) => {
        // sort first by hue, THEN lightness, THEN saturation
        if (a.hsl[0] == b.hsl[0] && a.hsl[2] == b.hsl[2]) {
            return b.hsl[1] - a.hsl[1];
        } else if (a.hsl[0] == b.hsl[0]) {
            return b.hsl[2] - a.hsl[2]
        } else {
            return b.hsl[0] - a.hsl[0];
        }
    })

    $scope.resetAllColsToInact = () => {
        $scope.allColOpts.forEach(t => {
            t.active = false;
        })
        // $scope.$apply();
    }
    $scope.resetAllColsToInact();
    $scope.setRainbow = () => {
        $scope.resetAllColsToInact();
        const cColors = [
            [255, 0, 0],
            [255, 128, 0],
            [255, 255, 0],
            [0, 255, 0],
            [0, 0, 255],
            [128, 0, 255]
        ];
        cColors.forEach(c => {
            $scope.findNearestColor(c, true);
        })
    }
    $scope.pickAll = () => {
        $scope.allColOpts.forEach(t => t.active = true);
    }
    $scope.drawImg = function() {
        //generating chunks for image $scope.im
        $scope.chunks = [
            []
        ];
        //the amount of pixels (h and w separately) per chunk
        const pxPer = {
            h: Math.floor($scope.im.h / $scope.board.h),
            w: Math.floor($scope.im.w / $scope.board.w)
        }
        const currPx = { x: 0, y: 0 };
        let currYRow = 0;
        let tooMany = 500;
        console.log('pixels per chunk', pxPer, 'board size (pxls)', $scope.board, 'im size', $scope.im)
        while (currPx.y < $scope.im.h - pxPer.h) {
            let i = 0,
                j = 0,
                avg = [
                    [],
                    [],
                    []
                ];
            for (i; i < pxPer.h; i++) {
                for (j; j < pxPer.w; j++) {
                    let thePx = $scope.im.pxls[currPx.y + i][currPx.x + j];
                    avg[0].push(thePx.red);
                    avg[1].push(thePx.green);
                    avg[2].push(thePx.blue);
                }
            }
            currPx.x += pxPer.w;
            if (currPx.x >= $scope.im.w - pxPer.w) {
                currPx.x = 0;
                currPx.y += pxPer.h;
                $scope.chunks.push([]);
                currYRow++;
            }
            tooMany--;
            let rawCol = avg.map(avgc => avgc.reduce((a, b) => a + b) / avgc.length);
            $scope.chunks[currYRow].push({
                raw: avg.map(avgc => avgc.reduce((a, b) => a + b) / avgc.length),
                picked: $scope.findNearestColor(rawCol)
            })
        }
        $scope.pegsDone = true;
        setTimeout(function() {

            $scope.ppWid = Math.floor(document.querySelector('.peg-row').offsetWidth / $scope.board.w)-1;
            console.log($scope.chunks, $scope.ppWid);
            $scope.$apply();
        }, 500)
        // console.log(im_url, rat)
        // //dimension stuffs. default to actual image dimensions
        // var dims = {
        //     height: $scope.im.h,
        //     width: $scope.im.w
        // }
        // var xDim = Math.floor(dims.width / rat),
        //     yDim = Math.floor(dims.height / rat);
        // // console.log('IMAGE DATA:', imgData)
        // var chunkWidth = Math.floor(dims.height / yDim); //number of pixels high each chunk is
        // var chunkHeight = Math.floor(dims.width / xDim); //number of pixels wide each chunk is
        // console.log(chunkWidth, chunkHeight);

        // //we now have an array of all pixel rgb vals, with each pixel ALSO assigned its x and y coords

        // //now, we're going to calculate the average rgb of each chunk (grp of pixels)
        // var chunkArr = [];
        // for (var i = 0; i < dims.height; i += chunkHeight) {
        //     for (var j = 0; j < dims.width; j += chunkWidth) {
        //         var tot = chunkWidth * chunkHeight;
        //         var avg = {
        //             r: 0,
        //             g: 0,
        //             b: 0
        //         };
        //         //now we're in one 'chunk'. We average all the rgb vals, and...
        //         for (var x = 0; x < chunkWidth; x++) {
        //             for (var y = 0; y < chunkHeight; y++) {
        //                 var theX = j + x;
        //                 var theY = i + y;
        //                 // if (i == 0 && j == 0) {
        //                 //     console.log('FIRST CHUNK:', theX, theY, rgbArr[theY][theX])
        //                 // }
        //                 if (rgbArr[theY] && rgbArr[theY][theX]) {
        //                     avg.r += rgbArr[theY][theX].red;
        //                     avg.g += rgbArr[theY][theX].green;
        //                     avg.b += rgbArr[theY][theX].blue;
        //                 } else {
        //                     //this px doesnt exist, so subtract from tot (so that our average is accurate)
        //                     tot--;
        //                 }
        //             }
        //         }
        //         //now average
        //         avg.r = avg.r / tot;
        //         avg.g = avg.g / tot;
        //         avg.b = avg.b / tot;
        //         //and push into chunkarr
        //         chunkArr.push(avg);
        //     }

        // }

    };

    function rgbToHex(rgb) {
        var r = parseInt(rgb.r).toString(16),
            g = parseInt(rgb.g).toString(16),
            b = parseInt(rgb.b).toString(16);
        if (r.length < 2) r = '0' + r;
        if (g.length < 2) g = '0' + g;
        if (b.length < 2) b = '0' + b;
        return r + g + b;
    }

    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return [h, s, l];
    }

    $scope.canv = document.querySelector('canvas');
    $scope.canvImg = new Image(); //we're copying image to create a 'local' copy of it
    $scope.ctx = $scope.canv.getContext("2d");
    $scope.canvImg.addEventListener("load", function() {
        $scope.im = {
            h: this.height,
            w: this.width,
            pxls: [],
            cols: []
        };
        $scope.canv.width = this.width;
        $scope.canv.height = this.height;
        $scope.canv.style.width = this.width + 'px';
        $scope.canv.style.height = this.height + 'px';
        $scope.ctx.drawImage($scope.canvImg, 0, 0);
        let currPx = 0;
        imgData = $scope.ctx.getImageData(0, 0, $scope.im.w, $scope.im.h).data;
        console.log('IMG DATA', imgData)
        for (let y = 0; y < this.height; y++) {
            let row = [];
            for (let x = 0; x < this.width; x++) {
                let newRGB = {
                    red: imgData[currPx],
                    green: imgData[currPx + 1],
                    blue: imgData[currPx + 2]
                };
                currPx += 4;
                row.push(newRGB);
                let rgbStr = `${newRGB.red},${newRGB.green},${newRGB.blue}`,
                    colEntry = $scope.im.cols.find(t => t.rgb == rgbStr);
                // console.log(colEntry)
                if (rgbStr && !colEntry) {
                    //this col not already recorded!
                    $scope.im.cols.push({
                        rgb: `${newRGB.red},${newRGB.green},${newRGB.blue}`,
                        count: 1
                    })
                } else {
                    colEntry.count++;
                }
            }
            $scope.im.pxls.push(row);
        }
        $scope.im.cols = $scope.im.cols.sort((a, b) => {
            return b.count - a.count;
        })
        $scope.resetAllColsToInact();
        $scope.pickMostLikely();
        $scope.$apply();
        // console.log('IM', $scope.im, 'MOST LIKELY BEADZ', pickedCols.map(t => t.name))
    });
    $scope.pickMostLikely = () => {
        $scope.resetAllColsToInact();
        let currColNum = 0;
        const pickedCols = [];
        while (pickedCols.length < 6 && currColNum < $scope.im.cols.length) {
            var nearestCol = $scope.findNearestColor($scope.im.cols[currColNum].rgb, true)
            if (!pickedCols.find(q => q.name == nearestCol.name)) {
                // this 'nearest' color NOT already picked
                pickedCols.push(nearestCol);
            }
            currColNum++;
        }
        // $scope.$apply();
    }
    $scope.loadImg = function() {

        var file = document.querySelector('#myFile').files[0];
        var reader = new FileReader();

        reader.addEventListener("load", function() {
            $scope.imgLoaded = true;
            pik.src = reader.result;
            localStorage.setItem("savedImageData", reader.result);
            $scope.ctx.fillStyle = '#ffffff';
            $scope.canvImg.src = localStorage.savedImageData;
            $scope.$apply();
        }, false);

        if (file) {
            console.log('FILE SIZE', file.size)
            // return false;
            reader.readAsDataURL(file);
        }
    }
    $scope.findNearestColor = (col, auto) => {
        //either pick the nearest active color (used for actually generating the pegs) OR find the nearest color to MAKE active (if we're getting an image)
        if (typeof col == "string") {
            col = col.split(',').map(t => parseInt(t));
        }
        const colDists = $scope.allColOpts.filter(t => t.active || auto).map(cl => {
            let dif = cl.rgb.map((c, i) => {
                // console.log(c,col,cl)
                return Math.abs(col[i] - c);
            }).reduce((a, b) => a + b) / 3;
            // console.log('CL',cl)
            cl.dif = dif;
            return cl;
        }).sort((a, b) => {
            return a.dif - b.dif;
        });
        // console.log('COLOR DISTANCES FOR THIS COL',colDists[0])
        if (auto) {
            colDists[0].active = true;
        }
        return colDists[0];
        //find the color from the above list that is the MINIMUM avg distance to the above color

    }
    $scope.findNearestColor([255, 128, 0], true);
    $scope.doPegs = function() {
        console.log('pegDraw triggered')
        var totalSize = ($scope.im.h / $scope.board.h) * ($scope.im.w / $scope.board.w);
        var conf = true;
        if (totalSize > 60000) {
            conf = confirm('Warning! Your image is particularly large. Consider using a smaller image OR reducing the ratio! Are you sure you want to continue?')
        }
        if (conf) {
            $scope.drawImg($scope.oldUrl, $scope.imRat);
        }
    };
})