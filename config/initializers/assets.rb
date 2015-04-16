# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( demo-bundle.js bubble_map-bundle.js history_dashboard-bundle.js current_proposal_pipeline-bundle.js organization_type_sankey-bundle.js program_treemap-bundle.js recipient_treemap-bundle.js home-bundle.js )

#let the webpack source maps work correctly by not appending a semicolon from sprockets
Rails.application.config.assets.configure do |env|
  env.unregister_postprocessor 'application/javascript', Sprockets::SafetyColons
end