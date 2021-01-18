---
title: Initial report of rodent trapping pilot
subtitle: The study visit in November-December included trials of the trapping protocol at two village sites in Eastern Sierra Leone, this report has been produced to support refinement of the study protocol and finalise the analysis plans.

# Summary for listings and search engines
summary: The study visit in November-December included trials of the trapping protocol at two village sites in Eastern Sierra Leone, this report has been produced to support refinement of the study protocol and finalise the analysis plans.

# Link this post with a project
projects: [Rodent trapping]

# Date published
date: "2021-01-17"

# Is this an unpublished draft?
draft: false

# Show this page in the Featured widget?
featured: false

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  
authors:
- admin

tags:
- Lassa
- Planetary Health
- One health
- Zoonoses
- Epidemiology
- Rodent trapping
---
This report was generated from a RMarkdown document. It uses data within my `rodent_trapping` repository on GitHub  [here](https://github.com/DidDrog11/rodent_trapping) and data extracted from other publically available resources.

## Thesis hypothesis
Increasing intensity of anthropogenic land use along a socio-ecological gradient affects rodent species richness and abundance within a Lassa fever endemic region of Sierra Leone, altering within rodent and rodent-to-human transmission dynamics of Lassa fever virus.

### Thesis questions
  * Is degree of anthropogenic habitat disturbance associated with a change in rodent assemblages favouring generalist species?
  * Does the structure of rodent species assemblages within a habitat alter Lassa fever virus incidence and prevalence in Mastomys natalensis?
  * Does habitat degradation and subsequent change in rodent species assemblages increase the risk of Lassa fever virus spillover events into local human populations?

## Pilot study report
An initial report for the trapping activity conducted November-December 2020

### Study site selection
A recent review conducted by Rory Gibb et al. 2017 collated published and unpublished documented Lassa Fever cases (humans) and infections (PCR) or seroprevalence (Ab) (rodents) from countries reporting LASV presence. This data has been used to support study site selection.

![Previously documented Lassa cases in Sierra Leone](/media/rodent_report_fig/lassa_SL.png)

This highlights that most of the documented cases of Lassa Fever in Sierra Leone are found in the East of the country. There is a particularly large cluster around Kenema, the location of the Lassa Fever treatment ward and reference laboratory. There is a slightly smaller cluster to the North and North East of the city around Panguma and Segbwema. recently cases have been detected near Freetown and Bo suggesting a wider distribution. Several projects over the last couple of years, PREDICTS and LAROCS have been conducting larger transect studies across the country which while not formally reported are suggestive of widespread serological evidence of infection in rodents.

My work will be focussed primarily around Panguma, I will set up a "control" site in Kambia and I would also like to set up an additional semi-urban site on the outskirts of either Panguma or Kenema to complement the two rural sites I will describe below.

![Previously documented Lassa cases near Panguma](/media/rodent_report_fig//lassa_panguma.png)
The above map highlights human cases and positive rodents in and around Panguma. This in combination with land use maps was used to select the two rural sites. Lalehun lies to the East of Panguma. Seilama lies to the South West. Both are represented by a black diamond.

### Land use at the study sites

To address the above questions it's important to sample rodents in several distinct habitats. If these habitats undergo changed use during the observed study period this would provide additional causal evidence for any changes in rodent assemblage species composition. However, this is not a specific requirement for this work. Observed differences between species composition across different land usages remains illustrative.

This land use classification is obtained from a recent paper by [Jung et al. 2020](https://www.nature.com/articles/s41597-020-00599-8). The colours represent different IUCN habitat classifications

  * Black = 14.5 Urban Areas
  * Orange = 3.6 Shrubland - Subtropical-tropical moist
  * Red = 14.3 Plantations 
  * Light green = 1.6 Forest - subtropical-tropical moist lowland
  * Dark green = 1.9 Forest - subtropical-tropical moist montane
  * Mauve = 3.7 Shrubland - subtropical-tropical high altitude

![Lalehun land use map, classified by IUCN categories](/media/rodent_report_fig//lalehun_IUCN.png)

![Seilama land use map, classified by IUCN categories](/media/rodent_report_fig//seilama_IUCN.png)

Using the habitat map and discussions with locals we identified sites that would provide use with varied habitats and that would also be able to be repeatedly sampled irrespective of whether the visit was conducted during the rainy season.

### Lalehun (Village 1) trap grid locations

![](/media/rodent_report_fig//lalehun_traps.png)
The base map used here is from Google maps and so is unfortunately not entirely up-to-date. 

The habitats of the trap grids are as follows:

 * 1 - Village periphery
 * 2 - Proximal agriculture (wet rice field)
 * 3a - Developing Banana plantation and fallow land
 * 3b - Developing Banana plantation and Pineapple garden
 * 4 - Disturbed forest, long-term (5 years) fallow land
 * 5 - Cassava plantation
 * 6 - Within the village, outside of houses
 
The specific location of each individual trap was also recorded (e.g. edge environment, base of tree)

### Seilama (Village 1) trap grid locations

![](/media/rodent_report_fig/seilama_traps.png)
The habitats of the trap grids are as follows:

 * 1 - Palm plantation, near the village and main road
 * 2 - Proximal agriculture (Cacao and Coffee plantation)
 * 3 - Recently harvested dry rice field
 * 4 - Cassava plantation
 * 5 - Disturbed forest, long term fallow
 * 6 - Within the village, outside of houses

This effectively produces 1 trap site in the village, 3 proximal agricultural sites, 1 distal agriculture and 1 forest/fallow land site for each village site.

The code to produce the maps of trap location is in `scripts/geolocation_traps.R` with the data available in `data/trap_sites.csv`

## Initial data

### Trap data

Lalehun was visited first, it took a couple of days to get up and running properly there so less trap nights were completed. 726 from Lalehun compared to 1120 from Seilama.

[](/media/rodent_report_fig/proportion_trap_nights.png)

During this visit no traps were set in houses, this will change for future visits.

[](/media/rodent_report_fig/number_trap_nights.png)

We arrived late in Lalehun on the first day and were only able to set up one site, two further sites were set the next day with the final two up by the 2nd of December. We were more efficient by the time we got to Seilama with all but the village site set up on the first day. We were thus able to complete 4 nights of trapping at each site in Seilama.

### Catch data

We recorded the presence or absence of rodent bait the next morning, along with whether the trap was found to be sprung closed (i.e. it had been disturbed overnight or it had been triggered by a rodent but it had not successfully trapped it).

[](/media/rodent_report_fig/traps_baits.png)

There appears to be a decrease in removal of bait from the traps in subsequent nights

[](/media/rodent_report_fig/proportion_rodents.png)

65 Rodents were trapped during the pilot study:

  * 22 in Lalehun for an overall trap success rate of 3% 
  * 43 from Seilama for a trap success rate of 3.8%

No rodents were trapped in the distal agriculture or forested habitats at Lalehun, although it must be noted that only two nights of traps were set in those locations. 

#### Location of trapped rodents

48 (74%) of the trapped species belong to the family Muridae, the remaining 17 (26%) were shrews (family Soricidae). 

[](/media/rodent_report_fig/genera.png)

The shrews (genera *Crocidura*) form the highest proportion of individuals. *Praomys* and *Lophuromys* were the most abundant Muridae genera. *Praomys* was not detected in Lalehun with *Lophuromys* being detected at both study sites. *Mus* and *Lemniscomys* were the only other Muridae caught in Lalehun. 6 additional genera of Muridae were trapped in Seilama above those caught in Lalehun.

[](/media/rodent_report_fig/habitat_rodents.png)

This shouldn't be over interpreted at the moment as more data will be needed but there is expected to be a difference in the habitat preferences of different species. This can also be looked at over time/seasonality.

[](/media/rodent_report_fig/trapped_shrews.png)

Shrews were trapped in most locations but not within the forested/fallow areas.

### Diversity

[](/media/rodent_report_fig/genus_richness.png)

Richness was similar across all sites in Seilama, less so in Lalehun but likely related to the reduced trap nights obtained there.

[](/media/rodent_report_fig/individual_abundance.png)

There was some degree of increased abundance in the agricultural and fallow sites in Seilama compared to the village site. No rodents were trapped in site 4 and 5 in Lalehun so makes any comparisons slightly harder.

We will go on to calculate species diversity with for example the Shannon-Wiener index but I'd like to do some further work speciating the trapped rodents before this.

### Species ID
I generated a taxanomic key for the small mammals likely to be trapped in the sites based on occurrence data from two sources. The first by [Ara Monadjem et al.](https://www.degruyter.com/view/title/126014) which had data on rodents and the second by [Kingdon and Happold](https://www.bloomsbury.com/uk/mammals-of-africa-9781408122570/). These resources provided data that has been extracted into `rodent_ids.R`. The local team also had expertise in identifying rodents to species which was invaluable.

The `field_id` is based on their initial classification. I have then compared the measurements obtained in the field with the published measurements to corroborate their classification or suggest potential misclassification. All rodents were photographed and tissue samples were taken for chromosomal ID if required.
