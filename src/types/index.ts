export type Speaker = {
  name: string,
  disambiguatingDescription: string,
  descriptionHtml: string,
  image: string,
  websites: string[],
}

export type SpeakerQuery = {
  pageProps: {
    speakers: Speaker[]
    filter: string
    filteredSpeakers: Speaker[]
  }
}
