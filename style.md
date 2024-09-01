
## 字體大小

``` scss
$font-sizes: (
  1: $h1-font-size, // 48px
  2: $h2-font-size, // 40px
  3: $h3-font-size, // 32px
  4: $h4-font-size, // 28px
  5: $h5-font-size, // 24px
  6: $h6-font-size, // 20px
  7: $font-size-base, // 16px
  8: $font-size-base * 0.875, // 14px
  9: $font-size-base * 0.75 //  12px 
) !default;
```

## font weight

``` scss
$font-weight-lighter:         lighter !default;
$font-weight-light:           300 !default;
$font-weight-normal:          400 !default;
$font-weight-semibold:        600 !default;
$font-weight-bold:            700 !default;
$font-weight-bolder:          bolder !default;
```

## colors

``` scss
$primary-120: #003BB7; 
$primary:     #0068FF; //$blue !default;
$primary-80:  #3F95FF; 
$primary-60:  #66B1FF; 
$primary-40:  #99CFFF; 
$primary-10:  #E5F4FF;
$success-120: #48970F; 
$success:     #7CD31F; //$green !default;
$success-20:  #DDFAA5; 
$success-10:  #F0FCD1;
$info-120:    #1566B5; 
$info:        #2AAFFC; //$cyan !default;
$info-20:     #A9EFFE; 
$info-10:     #D4F9FE;
$alert-120:   #B71D4F;
$alert:       #FF3A55;
$alert-20:    #FFBBB0;
$alert-10:    #FFE0D7;
$dark:        #000;    //$gray-900 !default;
$gray-80:     #4B4B4B;
$gray-60:     #909090;
$gray-40:     #ECECEC;
$gray-10:     #F9F9F9;
$light:       #fff;
```

## border radius

``` scss
values: (
  null: var(--#{$prefix}border-radius),
  0: 0,
  1: var(--#{$prefix}border-radius-sm), //4px
  2: var(--#{$prefix}border-radius),
  3: var(--#{$prefix}border-radius-lg), //12px
  4: var(--#{$prefix}border-radius-xl),
  45: 1.25rem, // 20px
  5: var(--#{$prefix}border-radius-xxl),
  6: 100px,
  7: 2.5rem, //40px
  8: 3rem,
  circle: 50%,
  pill: var(--#{$prefix}border-radius-pill)
)
```






