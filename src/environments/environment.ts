// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    summary: 'https://api.covid19api.com/summary',
    timeSeries: 'https://data.covid19india.org/v4/min/timeseries.min.json',
    current: 'https://data.covid19india.org/v4/min/data.min.json',
    all: 'https://worldhealthorg.shinyapps.io/covid/__sockjs__/n=unGwfEbbwSf87alyVF/t=7f8a6f77ef5fa5a5dc08ee55abd170a6/w=261a5b02/s=0/337/dit0cfl5/xhr_send?t=1636271680433',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
