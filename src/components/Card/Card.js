import React, { Component } from "react";
import PropTypes from "prop-types";
import { Base } from "../";
import "./card.css";

/**
 * @description Card is a component that implements the Material Design card component, and makes it available to developers as a set of CSS classes.
 * @param {string} id - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} className - CSS class that will be overriding this components style.
 * @param {node} children - Child component to be encapsulated by this component.
 * @param {bool} outlined - Removes the shadow and displays a hairline outline instead.
 * @param {bool} primaryAction - The main tappable area of the card. Typically contains most (or all) card content except mdc-card__actions. Only applicable to cards that have a primary action that the main surface should trigger.
 * @param {bool} media - Media area that displays a custom background-image with background-size: cover.
 * @param {bool} mediaSquare - Automatically scales the media area's height to equal its width.
 * @param {bool} media169 - Automatically scales the media area's height according to its width, maintaining a 16:9 aspect ratio.
 * @param {bool} mediaContent - An absolutely-positioned box the same size as the media area, for displaying a title or icon on top of the background-image.
 * @param {bool} actions - Row containing action buttons and/or icons.
 * @param {bool} actionsFullBleed - Removes the action area's padding and causes its only child (an mdc-card__action element) to consume 100% of the action area's width.
 * @param {bool} actionButtons - A group of action buttons, displayed on the left side of the card (in LTR), adjacent to mdc-card__action-icons.
 * @param {bool} actionIcons - A group of supplemental action icons, displayed on the right side of the card (in LTR), adjacent to __action-buttons.
 * @param {bool} action - An individual action button or icon.
 * @param {bool} actionButton - An action button with text.
 * @param {bool} actionIcon - An action icon with no text.
 */
class Card extends Component {
  render() {
    return (
      <Base {...this.props}>
        <div className={this.defaultCSS()}>{this.props.children}</div>
      </Base>
    );
  }

  defaultCSS() {
    return [
      "mdc-card",
      {
        "mdc-card--outlined": this.props.outlined,
        "mdc-card__primary-action": this.props.primaryAction,
        "mdc-card__media": this.props.media,
        "mdc-mdc-card__media--square": this.props.mediaSquare,
        "mdc-card__media--16-9": this.props.media169,
        "mdc-card__media-content": this.props.mediaContent,
        "mdc-card__actions": this.props.actions,
        "mdc-card__actions--full-bleed": this.props.actionsFullBleed,
        "mdc-card__action-buttons": this.props.actionButtons,
        "mdc-card__action-icons": this.props.actionIcons,
        "mdc-card__action": this.props.action,
        "mdc-card__action--button": this.props.actionButton,
        "mdc-card__action--icon": this.props.actionIcon
      }
    ];
  }
}

Card.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  outlined: PropTypes.bool,
  primaryAction: PropTypes.bool,
  media: PropTypes.bool,
  mediaSquare: PropTypes.bool,
  media169: PropTypes.bool,
  mediaContent: PropTypes.bool,
  actions: PropTypes.bool,
  actionsFullBleed: PropTypes.bool,
  actionButtons: PropTypes.bool,
  actionIcons: PropTypes.bool,
  action: PropTypes.bool,
  actionButton: PropTypes.bool,
  actionIcon: PropTypes.bool
};

export default Card;
