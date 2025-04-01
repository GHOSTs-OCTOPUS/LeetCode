const mostPoints = o =>
    o.reduceRight(($,O,l) => o[l]=Math.max(O[0]+(o[l+O[1]+1]||0),o[l+1]||0),0);