class EngHard {
    constructor(funcForRandom, nowText) {
      this.funcForRandom = funcForRandom;
      this.texts = [
      `You knew where to find her. Only a week ago you were still denying any knowledge of her whereabouts.
By now the medical section must know about the spiderweb, Spock thought. Sick bay would be in chaos.
Then Andy gave a long low whistle, and stood staring in astonishment. Tom looked at him impatiently.`,

      `I noted that her lovely brow had already been wrinkled with distress, considering the possibilities.
We could go for a walk, he suggested. Or, she thought about that for a few seconds and then decided.
He waited for the dead man to answer, and his fingers moved over the still face as if he were blind.`,

      `At the other tables, both men and women are clapping in time to the driving beat of a marching song.
He looked amiable, but Kaitlyn could feel his savage joy. He knew she was hurting and he liked that.
Stopping was out of the question at this speed. The ship would need miles of room to skid to a halt.`,
      
      `Cathy Calvin looked at the towering model curiously. Maybe she was in shock. Hopefully, that was it.
Still. Automatic fire systems spray gas everywhere. Only the dimmest emergency lights cast any glow.
She felt his pain, his sorrow. She hated him for that. If she died tomorrow he wouldn't care at all.`,
      
      `There was a dull booming sound as the children's father finished speaking. Tom looked at his father.
The question that lay at the back of all their minds was how long a trail might stretch before them.
The Frenchman made his mouth into the shape required for a whistle, although no note could be heard.`,
      
      `It was useless to argue. Barrett wanted to move him now, while he was too weak to cause any trouble.
Now he rode to catch up with the girl, turning his mount so that she was forced to pull in her mare.
Within seconds they were on the open road, the clang of the village bells growing ever more distant.`,
      
      `He couldn't help glancing repeatedly at the two women, the same way they were surely appraising him.
Dully, he shook his head. He didn't understand what was happening. It confused him. It had hurt him.
On the third visit, he told me that his migraine had practically disappeared. He was very impressed.`,
      
      `In a family, what isn't spoken is what you listen for. But the noise of a family is to drown it out.
No gate opened. But with another blast of sound, something appeared between us and that flaming rod.
The spread cohered. The spread hit. The spread severed legs. Three trunk sections detached and fell.`
      ]
      this.nowNumber = Math.floor(Math.random() * this.texts.length);
      this.nowText = nowText;
    }
  
    get getText() {
      return funcForRandom(this.nowNumber, this.texts, this.nowText);
    }
  
  
  }