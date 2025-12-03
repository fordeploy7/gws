export interface DialogueStep {
  id: number;
  text: string;
  image: string; // Path to image
  buttonText: string;
}

export const dialogueData: DialogueStep[] = [
  {
    id: 1,
    text: "hi!",
    image: "/images/ccss_v2.png",
    buttonText: "Next",
  },
  {
    id: 2,
    text: "ik, ur sick",
    image: "/images/ccss_v2.png",
    buttonText: "Next",
  },
  {
    id: 3,
    text: "but there a saying",
    image: "/images/ccss_v2.png",
    buttonText: "Next",
  },
  {
    id: 4,
    text: "The mind often manifests fatigue as illness",
    image: "/images/ccss_v2.png",
    buttonText: "Next",
  },
  {
    id: 5,
    text: "sooo let's divert your mind",
    image: "/images/ccss_v2.png",
    buttonText: "Next",
  },
  {
    id: 6,
    text: "click on the play button",
    image: "/images/ccss_v2.png",
    buttonText: "Next",
  },
];
