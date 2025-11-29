export type FileSystemItem = {
  type: 'file' | 'directory';
  content?: string;
  children?: { [name: string]: FileSystemItem };
  permissions?: string; // 'r' = readable, '-' = restricted
};

export const fileSystem: FileSystemItem = {
  type: 'directory',
  children: {
    'bin': { type: 'directory', permissions: '-' },
    'boot': { type: 'directory', permissions: '-' },
    'dev': { type: 'directory', permissions: '-' },
    'etc': {
      type: 'directory',
      children: {
        'lsb-release': {
          type: 'file',
          content: "DISTRIB_ID=Ubuntu\nDISTRIB_RELEASE=24.04\nDISTRIB_DESCRIPTION=\"I love working with Ubuntu! It's my preferred environment for development.\""
        },
        'passwd': { type: 'file', permissions: '-' },
        'shadow': { type: 'file', permissions: '-' }
      }
    },
    'home': {
      type: 'directory',
      children: {
        'visitor': {
          type: 'directory',
          children: {
            'hobbies.txt': {
              type: 'file',
              content: "Hobbies & Interests:\n\n🚴 Cycling\n   Exploring the world on two wheels.\n\n🎮 Gaming\n   - Competitive: Battlefield, Valorant\n   - Co-op: We Were Here, A Way Out, It Takes Two, Chained Together\n   - Steam Deck: Love playing building/strategy games on the go.\n   - Peak: Always aiming for the top!"
            },
            'personal.txt': {
              type: 'file',
              content: "Personal Life:\n\n💍 Happily engaged\n👨‍👧 Proud father of a little daughter\n❤️ Family is my biggest motivation."
            },
            'bio.txt': {
              type: 'file',
              content: "Biography:\n\n📅 Born: 1991\n📍 Place of Birth: Berlin\n🏠 Grew up in: Saxony\n💻 Coding since I discovered how to make computers do what I want."
            },
            'projects': {
                type: 'directory',
                children: {
                    'readme.md': { type: 'file', content: "Check out my GitHub for full project details! Type `projects` to see a visual overview." }
                }
            }
          }
        }
      }
    },
    'lib': { type: 'directory', permissions: '-' },
    'proc': { type: 'directory', permissions: '-' },
    'root': { type: 'directory', permissions: '-' },
    'sys': { type: 'directory', permissions: '-' },
    'tmp': { type: 'directory', children: {} },
    'usr': { type: 'directory', permissions: '-' },
    'var': { type: 'directory', permissions: '-' }
  }
};
