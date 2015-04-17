# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.

%w( demo bubble_map history_dashboard current_proposal_pipeline organization_type_sankey program_treemap recipient_treemap home ).each do |cn|
	Rails.application.config.assets.precompile += ["#{cn}-bundle.js","#{cn}.css.scss", "#{cn}.css"]
end

#let the webpack source maps work correctly by not appending a semicolon from sprockets
Rails.application.config.assets.configure do |env|
  env.unregister_postprocessor 'application/javascript', Sprockets::SafetyColons
end