import type { Schema, Struct } from '@strapi/strapi';

export interface FightcoreMoveEmbed extends Struct.ComponentSchema {
  collectionName: 'components_fightcore_move_embeds';
  info: {
    displayName: 'move-embed';
  };
  attributes: {
    animationOnly: Schema.Attribute.Boolean;
    character: Schema.Attribute.Enumeration<
      [
        'bowser',
        'captainfalcon',
        'donkeykong',
        'drmario',
        'falco',
        'fox',
        'fwireframe',
        'ganondorf',
        'iceclimbers',
        'jigglypuff',
        'kirby',
        'link',
        'luigi',
        'mario',
        'marth',
        'mewtwo',
        'mrgame&watch',
        'ness',
        'peach',
        'pichu',
        'pikachu',
        'roy',
        'samus',
        'sheik',
        'yoshi',
        'younglink',
        'zelda',
      ]
    >;
    move: Schema.Attribute.Enumeration<
      [
        'adownb',
        'airdodge',
        'aneutralb',
        'asideb',
        'aupb',
        'bair',
        'beamsword',
        'bgetup',
        'bgetuprollback',
        'bgetuprollstomach',
        'bob_omb',
        'bowserspecial',
        'btechroll',
        'bthrow',
        'captainfalconspecial',
        'cargo_bthrow',
        'cargo_dthrow',
        'cargo_fthrow',
        'cargo_uthrow',
        'daft',
        'dair',
        'dashgrab',
        'dattack',
        'donkeykongspecial',
        'downb',
        'drmariospecial',
        'dsmash',
        'dsmash_charge',
        'dthrow',
        'dtilt',
        'edge',
        'fair',
        'falcospecial',
        'fgetup',
        'fgetuprollback',
        'fgetuprollstomach',
        'foxspecial',
        'fsmash',
        'fsmash2',
        'ftechroll',
        'fthrow',
        'ftilt',
        'ganondorfspecial',
        'grab',
        'iceclimbersspecial',
        'jab1',
        'jab2',
        'jab3',
        'jigglypuffspecial',
        'jump',
        'linkspecial',
        'luigispecial',
        'mariospecial',
        'marthspecial',
        'mewtwospecial',
        'mrgameandwatchspecial',
        'mr_saturn',
        'nair',
        'nessspecial',
        'neutralb',
        'neutraltech',
        'peachspecial',
        'pichuspecial',
        'pikachuspecial',
        'pummel',
        'rjab',
        'rollbackwards',
        'rollforward',
        'royspecial',
        'samusspecial',
        'sheikspecial',
        'sideb',
        'sideb2',
        'sideb2up',
        'sideb3',
        'sideb3down',
        'sideb3up',
        'sideb4',
        'sideb4down',
        'sideb4up',
        'sidebmissfire',
        'spotdodge',
        'taunt',
        'uaft',
        'uair',
        'unknown',
        'unknown_air',
        'upb',
        'usmash',
        'usmash_charge',
        'uthrow',
        'utilt',
        'walltech',
        'walltechjump',
        'yoshispecial',
        'younglinkspecial',
        'zair',
        'zeldaspecial',
      ]
    >;
  };
}

export interface SharedFightcoreMoveEmbed extends Struct.ComponentSchema {
  collectionName: 'components_shared_fightcore_move_embeds';
  info: {
    displayName: 'Fightcore Move Embed';
  };
  attributes: {
    character: Schema.Attribute.String;
    move: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['success', 'info', 'warn', 'error', 'secondairy', 'contrast']
    > &
      Schema.Attribute.DefaultTo<'info'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'fightcore.move-embed': FightcoreMoveEmbed;
      'shared.fightcore-move-embed': SharedFightcoreMoveEmbed;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
