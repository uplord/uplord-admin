import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsSection extends Schema.Component {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    content: Attribute.Blocks;
    buttons: Attribute.Component<'components.button', true>;
    image: Attribute.Media<'images'>;
    class: Attribute.String;
    icons: Attribute.Component<'sections.icon', true>;
  };
}

export interface SectionsIcon extends Schema.Component {
  collectionName: 'components_sections_icons';
  info: {
    displayName: 'Icon';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    logo: Attribute.Media<'images'>;
    link: Attribute.String;
    content: Attribute.Blocks;
    class: Attribute.String;
    logo_title: Attribute.String;
  };
}

export interface SectionsCards extends Schema.Component {
  collectionName: 'components_sections_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
    class: Attribute.String;
    hide_text: Attribute.Boolean;
    tooltip: Attribute.String;
  };
}

export interface SectionsBanner extends Schema.Component {
  collectionName: 'components_sections_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    image: Attribute.Media<'images'>;
    floating: Attribute.Boolean;
    leading: Attribute.String;
    buttons: Attribute.Component<'components.button', true>;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
    target: Attribute.String;
    class: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.section': SectionsSection;
      'sections.icon': SectionsIcon;
      'sections.cards': SectionsCards;
      'sections.banner': SectionsBanner;
      'components.button': ComponentsButton;
    }
  }
}
